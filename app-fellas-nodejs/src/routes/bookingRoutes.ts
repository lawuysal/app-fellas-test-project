import { Router } from "express";
import {
  createBooking,
  deleteBooking,
  getBookings,
} from "../controllers/bookingController";

// Router to handle booking routes

const router = Router();

router.route("/").get(getBookings).post(createBooking);

router.route("/:id").delete(deleteBooking);

export default router;
