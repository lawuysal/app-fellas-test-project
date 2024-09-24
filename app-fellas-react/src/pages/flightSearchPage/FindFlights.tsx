import { IoAirplaneSharp } from "react-icons/io5";
import FlightDirectionSwitch from "./FlightDirectionSwitch";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FlightDatePicker from "./FlightDatePicker";

export default function FindFlights() {
  const [searchQueries, setSearchQueries] = useState<URLSearchParams>(
    new URLSearchParams(),
  );
  const [, setSearchParams] = useSearchParams();

  const handleDateChange = (dates: {
    fromDateTime?: string;
    toDateTime?: string;
  }) => {
    const newParams = new URLSearchParams(searchQueries);

    if (dates.fromDateTime) {
      newParams.set("fromDateTime", dates.fromDateTime);
    }

    if (dates.toDateTime) {
      newParams.set("toDateTime", dates.toDateTime);
    }

    setSearchQueries(newParams);
  };

  return (
    <div className="flex flex-col gap-6 rounded-lg bg-background p-6 dark:bg-background/40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoAirplaneSharp />
          <h2 className="font-bold">BOOK YOUR FLIGHT</h2>
        </div>
        <FlightDirectionSwitch />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FlightDatePicker onDateChange={handleDateChange} />
      </div>
      <div className="flex max-w-fit flex-row-reverse gap-4">
        <Button
          className="max-w-max font-[550]"
          onClick={() => setSearchParams(searchQueries)}
        >
          Show flights
        </Button>
        <Button
          variant={"outline"}
          className="border-primary font-[550] dark:bg-[#141b28]"
          onClick={() => setSearchParams({})}
        >
          Clear filters
        </Button>
      </div>
    </div>
  );
}
