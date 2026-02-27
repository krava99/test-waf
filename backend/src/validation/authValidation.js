import { z } from 'zod';

// Registration schema
export const registerUserSchema = z.object({
  type: z.enum(['client', 'business'], {
    message: "Type must be 'client' or 'business'",
  }),
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
  age: z.number().int().positive({ message: 'Age must be a positive number' }),
  gender: z.enum(['male', 'female', 'other'], {
    message: "Gender must be 'male', 'female', or 'other'",
  }),
});

// Login schema
export const loginUserSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string({ message: 'Password is required' }),
});
