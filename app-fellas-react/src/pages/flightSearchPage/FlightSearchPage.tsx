import FindFlights from "./FindFlights";
import FlightCard from "./FlightCard";
import useFlights from "@/hooks/useFlights";
import FlightFilters from "./FlightFilters";
import LoaderMini from "@/components/LoaderMini";

export default function FlightSearchPage() {
  const { flights, isLoading } = useFlights();

  return (
    <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl grid-cols-[3fr_1fr] pb-40 transition-all duration-300 ease-linear">
      {/* Content */}
      <div className="flex flex-col gap-6">
        {/* Find */}
        <FindFlights />

        {/* Flights */}
        <div className="grid grid-cols-[3fr_1fr] items-center justify-center bg-muted dark:bg-muted">
          {/* Cards */}
          <div className="flex flex-col gap-16">
            {isLoading ? (
              <LoaderMini />
            ) : !flights ? (
              <div className="mx-auto flex">No flights found</div>
            ) : (
              flights?.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
              ))
            )}
          </div>

          <FlightFilters />
        </div>
      </div>

      {/* Right side */}
      <div></div>
    </div>
  );
}
