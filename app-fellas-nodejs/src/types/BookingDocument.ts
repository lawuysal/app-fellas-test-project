import { Document, ObjectId } from "mongoose";

// To create a type safe mongoose model, we need to create a type that extends the Document interface.

export interface BookingDocument extends Document {
  _id: ObjectId;
  flightId: string;
  createdAt: Date;
}
