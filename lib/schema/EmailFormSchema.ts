import { z } from 'zod';

export const EmailFormSchema = z.object({
  email: z.string().email().min(5),
});
