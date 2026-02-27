// src/controllers/usersController.js
import createHttpError from 'http-errors';
import { Bookings } from '../models/booking.js';
import { Users } from '../models/users.js';

export const getBookings = async (req, res) => {
  const bookings = await Bookings.find()
    .populate('clientId', 'name type')
    .populate('businessId', 'name type');

  res.status(200).json(bookings);
};
// Отримати одного користувача за id
export const getBookingById = async (req, res) => {
  const { bookingId } = req.params;
  const booking = await Bookings.findById(bookingId);

  if (!booking) {
    throw createHttpError(404, 'Booking not found');
  }

  res.status(200).json(booking);
};

export const createBooking = async (req, res) => {
  const { clientId, businessId } = req.body;

  const client = await Users.findById(clientId);
  const business = await Users.findById(businessId);

  if (!client || client.type !== 'client') {
    throw createHttpError(400, 'Invalid client');
  }

  if (!business || business.type !== 'business') {
    throw createHttpError(400, 'Invalid business');
  }

  const booking = await Bookings.create(req.body);
  res.status(201).json(booking);
};

export const updateBooking = async (req, res) => {
  const { bookingId } = req.params;

  const booking = await Bookings.findOneAndUpdate(
    { _id: bookingId }, // Шукаємо по id
    req.body,
    { new: true }, // повертаємо оновлений документ
  );

  if (!booking) {
    throw createHttpError(404, 'Booking not found');
  }

  res.status(200).json(booking);
};

export const deleteBooking = async (req, res) => {
  const { bookingId } = req.params;
  const booking = await Bookings.findOneAndDelete({
    _id: bookingId,
  });

  if (!booking) {
    throw createHttpError(404, 'Booking not found');
  }

  res.status(200).json(booking);
};
