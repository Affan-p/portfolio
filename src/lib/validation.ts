import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255),
  email: z.string().min(1, 'Email is required').email('Invalid email').max(255),
  message: z.string().min(1, 'Message is required').max(5000),
  website: z.string().max(255).default(''),
  submittedAt: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
