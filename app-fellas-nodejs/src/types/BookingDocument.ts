import { Document, ObjectId } from "mongoose";

export interface BookingDocument extends Document {
  _id: ObjectId;
  flightId: string;
  createdAt: Date;
}
