// src/routes/studentsRoutes.js

import { Router } from 'express';
import {
  createBooking,
  deleteBooking,
  getBookingById,
  getBookings,
  updateBooking,
} from '../controllers/bookingsController.js';
import {
  createBookingSchema,
  updateBookingSchema,
} from '../validation/bookings.schema.js';
import { validateBody } from '../middleware/validateBody.js';

const router = Router();

router.get('/bookings', getBookings); // всі записи
router.get('/bookings/:bookingId', getBookingById);
router.post('/bookings', validateBody(createBookingSchema), createBooking);
router.patch(
  '/bookings/:bookingId',
  validateBody(updateBookingSchema),
  updateBooking,
);

router.delete('/bookings/:bookingId', deleteBooking);

export default router;
