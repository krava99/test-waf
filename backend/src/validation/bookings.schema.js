import { z } from 'zod';
import { objectIdSchema } from './objectId.js';

export const createBookingSchema = z.object({
  clientId: objectIdSchema,
  businessId: objectIdSchema,
});

export const updateBookingSchema = z.object({
  status: z.enum(['booked', 'cancelled']).optional(),
});
