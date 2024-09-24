import { IoMdCalendar } from "react-icons/io";
import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// Flight date picker component from the FindFlights component

export default function FlightDatePicker({
  onDateChange,
}: {
  onDateChange: (dates: { fromDateTime?: string; toDateTime?: string }) => void;
}) {
  const [departureDate, setDepartureDate] = useState<Date>();
  const [arrivalDate, setArrivalDate] = useState<Date>();
  const [searchParams] = useSearchParams();

  const handleDateChange = (
    dateType: "departure" | "arrival",
    selectedDate: Date | undefined,
  ) => {
    if (dateType === "departure") {
      setDepartureDate(selectedDate);
      onDateChange({
        fromDateTime: selectedDate
          ? format(selectedDate, "yyyy-MM-dd'T'HH:mm:ss")
          : undefined,
        toDateTime: arrivalDate
          ? format(arrivalDate, "yyyy-MM-dd'T'HH:mm:ss")
          : undefined,
      });
    } else {
      setArrivalDate(selectedDate);
      onDateChange({
        fromDateTime: departureDate
          ? format(departureDate, "yyyy-MM-dd'T'HH:mm:ss")
          : undefined,
        toDateTime: selectedDate
          ? format(selectedDate, "yyyy-MM-dd'T'HH:mm:ss")
          : undefined,
      });
    }
  };

  useEffect(() => {
    const fromDateTime = searchParams.get("fromDateTime");
    const toDateTime = searchParams.get("toDateTime");

    if (fromDateTime) {
      setDepartureDate(parseISO(fromDateTime));
    }
    if (toDateTime) {
      setArrivalDate(parseISO(toDateTime));
    }
  }, [searchParams]);

  return (
    <div className="flex w-full gap-1">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "relative h-[1.8rem] w-full rounded-s-full border-[3px] px-4 text-left text-sm dark:border-primary dark:bg-white dark:text-black",
              !departureDate && "relative text-muted-foreground",
            )}
          >
            <IoMdCalendar className="absolute left-3 top-[0.28rem] flex items-center text-primary" />
            {departureDate ? (
              format(departureDate, "PPP")
            ) : (
              <span>Select a starting date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={departureDate}
            onSelect={(date) => handleDateChange("departure", date)}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "relative h-[1.8rem] w-full rounded-e-full border-[3px] px-4 text-sm dark:border-primary dark:bg-white dark:text-black",
              !arrivalDate && "text-muted-foreground",
            )}
          >
            <IoMdCalendar className="absolute left-3 top-[0.28rem] mr-2 flex h-4 w-4 items-center text-primary" />
            {arrivalDate ? (
              format(arrivalDate, "PPP")
            ) : (
              <span>Select an ending date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={arrivalDate}
            onSelect={(date) => handleDateChange("arrival", date)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
