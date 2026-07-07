import { MIN_SUBMIT_TIME_MS } from "@/config/site";

export function isHoneypotFilled(website: string): boolean {
  return website.trim().length > 0;
}

export function isTooFast(submittedAt: string | undefined): boolean {
  if (!submittedAt) return true;
  const elapsed = Date.now() - new Date(submittedAt).getTime();
  return elapsed < MIN_SUBMIT_TIME_MS;
}
