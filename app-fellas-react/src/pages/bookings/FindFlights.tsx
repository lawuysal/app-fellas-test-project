import { IoAirplaneSharp } from "react-icons/io5";
import TripTypeSwitch from "./TripTypeSwitch";
import { Button } from "@/components/ui/button";
import FlightDestinationPicker from "./FlightDestinationPicker";
import FlightDatePicker from "./FlightDatePicker";

export default function FindFlights() {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-background p-6 dark:bg-background/40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoAirplaneSharp />
          <h2 className="font-bold">BOOK YOUR FLIGHT</h2>
        </div>
        <TripTypeSwitch />
      </div>
      <div className="flex gap-4">
        <FlightDestinationPicker />
        <FlightDatePicker />
      </div>
      <Button className="max-w-max font-[550]">Show flights</Button>
    </div>
  );
}
