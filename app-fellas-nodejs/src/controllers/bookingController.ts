import { Request, Response, Application } from "express";
import Booking from "../models/bookingModel";
import { CreateBookingRequestDTO } from "../models/dtos/createBookingRequestDTO";

// Request handlers for the booking API

export async function getBookings(req: Request, res: Response) {
  const bookings = await Booking.find();

  if (!bookings) {
    res.status(404).json({ message: "No bookings found" });
  }
  res.json(bookings);
}

export async function createBooking(
  req: Request<unknown, unknown, CreateBookingRequestDTO>,
  res: Response,
) {
  const flightId = req.body.flightId;

  const booking = await Booking.create({ flightId });

  res.json(booking);
}

export async function deleteBooking(req: Request, res: Response) {
  const bookingId = req.params.id;

  await Booking.findByIdAndDelete(bookingId);

  res.json({ message: "Booking deleted" });
}
