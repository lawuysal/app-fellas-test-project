import { Button } from "@/components/ui/button";
import { PlaneLanding, PlaneTakeoff } from "lucide-react";
import { IoAirplaneSharp } from "react-icons/io5";
import {
  getDepartureTime,
  getFlightDuration,
  getLandingTime,
} from "@/lib/dateUtils";
import { getFlightPrice } from "@/lib/priceUtils";
import { useGetFlight } from "@/hooks/useGetFlight";
import CityName from "../flightSearchPage/CityName";
import BookingCardAirlineName from "../flightSearchPage/AirlineName";
import Loader from "@/components/Loader";
import BookingButton from "@/components/BookingButton";

export default function BookingCard({ flightId }: { flightId: string }) {
  const { data: flight, isLoading, error } = useGetFlight(flightId);

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <Loader />;

  return (
    <div className="relative flex flex-col gap-6 rounded-lg rounded-bl-[0] bg-background p-6 dark:bg-background/40">
      <div className="inline-flex items-start font-semibold">
        <CityName
          iata={flight!.route.destinations[0]}
          flightDirection={flight!.flightDirection}
        />
      </div>
      <div className="grid grid-cols-5 items-center justify-center">
        <div className="flex flex-col">
          <div className="flex items-center justify-start gap-2 text-sm text-gray-500">
            <PlaneTakeoff size={15} className="text-gray-500" />
            <p>Departure</p>
          </div>
          <p>{getDepartureTime(flight!.scheduleDateTime)}</p>
          <p className="text-sm text-gray-500">
            Airport:{" "}
            {flight!.flightDirection === "A"
              ? flight!.route.destinations[0]
              : "AMS"}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[60%] border-2"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <BookingCardAirlineName prefixICAO={flight!.prefixICAO} />
          <IoAirplaneSharp />
          <p className="text-sm text-gray-500">
            {getFlightDuration(
              flight!.estimatedLandingTime,
              flight!.scheduleDateTime,
            )}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[60%] border-2"></div>
        </div>
        <div className="ml-10 flex flex-col">
          <div className="flex items-center justify-start gap-2 text-sm text-gray-500">
            <PlaneLanding size={15} className="text-gray-500" />
            <p>Arrival</p>
          </div>
          <p>
            {getLandingTime(
              flight!.estimatedLandingTime,
              flight!.scheduleDateTime,
            )}
          </p>
          <p className="text-sm text-gray-500">
            Airport:{" "}
            {flight!.flightDirection === "D"
              ? flight!.route.destinations[0]
              : "AMS"}
          </p>
        </div>
      </div>
      <div>
        <p>
          Price: $
          {getFlightPrice(
            flight!.estimatedLandingTime,
            flight!.scheduleDateTime,
          )}
        </p>
      </div>
      <Button
        variant="secondary"
        className="absolute -bottom-10 left-0 max-w-fit rounded-tl-none rounded-tr-none bg-primary/10 text-primary underline hover:bg-primary/15 dark:bg-primary/30 dark:text-foreground dark:hover:bg-primary/20"
      >
        Check the details
      </Button>
      <BookingButton flightId={flight!.id} />
    </div>
  );
}
