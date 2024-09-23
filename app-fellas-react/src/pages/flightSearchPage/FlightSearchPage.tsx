import FindFlights from "./FindFlights";
import FlightCard from "./FlightCard";
import Loading from "@/components/Loading";
import useFlights from "@/hooks/useFlights";

export default function Bookings() {
  const { flights, error, isLoading } = useFlights();

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl grid-cols-[3fr_1fr] bg-muted pb-40">
      {/* Content */}
      <div className="flex flex-col gap-6">
        {/* Find */}
        <FindFlights />

        {/* Bookings */}
        <div className="grid grid-cols-[3fr_1fr] items-center justify-center bg-muted dark:bg-muted">
          {/* Cards */}
          <div className="flex flex-col gap-16">
            {flights?.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>

          <div>Filters</div>
        </div>
      </div>

      {/* Right side */}
      <div></div>
    </div>
  );
}
