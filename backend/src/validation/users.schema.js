import { z } from 'zod';

export const createUserSchema = z.object({
  type: z.enum(['client', 'business']),
  name: z.string().trim().min(1, 'Name is required'),
  age: z.number().int().positive(),
  gender: z.enum(['male', 'female', 'other']),
});

export const updateUserSchema = createUserSchema.partial();
