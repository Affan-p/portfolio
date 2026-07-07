import { db } from '@/lib/db';
import { contactSubmissions } from '@/lib/db/schema';
import { isHoneypotFilled } from '@/lib/spam';
import { contactFormSchema } from '@/lib/validation';

async function notifyTelegram(name: string, email: string, message: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  const text = `✉️ New Contact\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: 'Invalid input' }, { status: 400 });
  }

  const { name, email, message, website } = parsed.data;

  if (isHoneypotFilled(website)) {
    return Response.json({ success: true });
  }

  await db.insert(contactSubmissions).values({ name, email, message });

  await notifyTelegram(name, email, message).catch(() => {});

  return Response.json({ success: true });
}
