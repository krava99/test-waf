export interface BookingResponse {
  _id: string;
  clientId: string;
  businessId: string;
  date: string;
  status: "booked" | "cancelled";
  createdAt: string;
  updatedAt: string;
}
