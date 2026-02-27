import { Schema, model } from 'mongoose';

const bookingSchema = new Schema(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: 'Clients',
      required: true,
    },

    businessId: {
      type: Schema.Types.ObjectId,
      ref: 'Clients',
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ['booked', 'cancelled'],
      default: 'booked',
    },
  },
  { timestamps: true },
);

export const Bookings = model('Bookings', bookingSchema);
