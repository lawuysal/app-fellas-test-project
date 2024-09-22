import { useQuery } from "@tanstack/react-query";
import FindFlights from "./FindFlights";
import BookingCard from "./BookingCard";
import { Flight } from "@/types/Flight";
import Loading from "@/components/Loading";

export default function Bookings() {
  const {
    data: flights,
    error,
    isLoading,
  } = useQuery<Flight[], Error>({
    queryKey: ["flights"],
    queryFn: () => {
      return fetch("http://localhost:3004/flights")
        .then((res) => res.json())
        .then((data) => data.flights);
    },
    retry: 0,
  });

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
              <BookingCard key={flight.id} flight={flight} />
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
