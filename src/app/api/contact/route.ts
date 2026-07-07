import { db } from '@/lib/db';
import { contactSubmissions } from '@/lib/db/schema';
import { isHoneypotFilled, isTooFast } from '@/lib/spam';
import { contactFormSchema } from '@/lib/validation';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: 'Invalid input' }, { status: 400 });
  }

  const { name, email, message, website, submittedAt } = parsed.data;

  if (isHoneypotFilled(website)) {
    return Response.json({ success: true });
  }

  if (isTooFast(submittedAt)) {
    return Response.json({ error: 'Too fast' }, { status: 400 });
  }

  await db.insert(contactSubmissions).values({ name, email, message });

  return Response.json({ success: true });
}
