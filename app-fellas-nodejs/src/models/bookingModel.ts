import { Schema, model, Model } from "mongoose";
import { BookingDocument } from "../types/BookingDocument";

const bookingSchema = new Schema<BookingDocument>({
  flightId: {
    type: String,
    required: [true, "Flight ID is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking: Model<BookingDocument> = model<BookingDocument>(
  "Booking",
  bookingSchema,
);

export default Booking;
