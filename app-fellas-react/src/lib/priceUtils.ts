import { BASE_PRICE } from "@/lib/settings";
import { getFlightDurationInMilliseconds } from "./dateUtils";

// returns the price of the flight
export function getFlightPrice(
  estimatedLandingTime: string,
  scheduleDateTime: string,
) {
  const diffMilliseconds = getFlightDurationInMilliseconds(
    estimatedLandingTime,
    scheduleDateTime,
  );

  const price = Math.floor(BASE_PRICE * diffMilliseconds);

  return price;
}
