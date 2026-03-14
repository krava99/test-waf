import { BookingResponse } from "@/types/bookings";
import { nextApi } from "./api/api";

// Отримати всі букінги
export const fetchBookings = async () => {
  const res = await nextApi.get<BookingResponse[]>("/bookings");
  return res.data;
};

// Отримати один букінг за ID
export const fetchBookingById = async (_id: string) => {
  const res = await nextApi.get<BookingResponse>(`/bookings/${_id}`);
  return res.data;
};

// Створити букінг
export const createBooking = async () => {
  const res = await nextApi.post<BookingResponse>("/bookings", data);
  return res.data;
};

// Оновити букінг
export const updateBooking = async (_id: string) => {
  const res = await nextApi.patch<BookingResponse>(`/bookings/${_id}`, data);
  return res.data;
};

// Видалити букінг
export const deleteBooking = async (_id: string) => {
  const res = await nextApi.delete<{ message: string }>(`/bookings/${_id}`);
  return res.data;
};
