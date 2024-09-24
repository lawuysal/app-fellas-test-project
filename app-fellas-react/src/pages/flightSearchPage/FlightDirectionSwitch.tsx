import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";

export default function FlightDirectionSwitch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isArrival, setIsArrival] = useState(
    !(searchParams.get("flightDirection") === "D"),
  );

  return (
    <div className="inline-flex gap-[0.10rem] rounded-md" role="group">
      <Button
        variant={isArrival ? "default" : "secondary"}
        className={`rounded-r-none rounded-s-full px-4 py-2 text-sm font-[550] ${
          isArrival
            ? "border-2 border-primary bg-primary text-primary-foreground"
            : "border-2 border-primary/20 bg-primary/20 text-primary hover:bg-primary/30 dark:border-primary dark:bg-primary/10 dark:hover:bg-primary/20"
        }`}
        onClick={() => {
          const newParams = new URLSearchParams(searchParams);
          newParams.delete("flightDirection");
          newParams.append("flightDirection", "A");
          setSearchParams(newParams);
          setIsArrival(true);
        }}
        aria-pressed={isArrival}
      >
        Arrival
      </Button>
      <Button
        variant={!isArrival ? "default" : "secondary"}
        className={`rounded-l-none rounded-r-full px-4 py-2 text-sm font-[550] ${
          !isArrival
            ? "border-2 border-primary bg-primary text-primary-foreground"
            : "border-2 border-primary/20 bg-primary/20 text-primary hover:bg-primary/30 dark:border-primary dark:bg-primary/10 dark:hover:bg-primary/20"
        }`}
        onClick={() => {
          const newParams = new URLSearchParams(searchParams);
          newParams.delete("flightDirection");
          newParams.append("flightDirection", "D");
          setSearchParams(newParams);
          setIsArrival(false);
        }}
        aria-pressed={!isArrival}
      >
        Departure
      </Button>
    </div>
  );
}
