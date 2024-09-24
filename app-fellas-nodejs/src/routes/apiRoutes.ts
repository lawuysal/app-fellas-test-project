import { Router } from "express";
import {
  getApiAirline,
  getApiDestination,
  getApiFlights,
  getApiFlight,
} from "../controllers/apiControllers";

// Router to handle airplane API's routes

const router = Router();

router.route("/flights/:queries?").get(getApiFlights);

router.route("/getFlight/:flightId").get(getApiFlight);

router.route("/destinations/:iata").get(getApiDestination);

router.route("/airlines/:prefixICAO").get(getApiAirline);

export default router;
