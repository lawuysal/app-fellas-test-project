import { useGetBookings } from "@/hooks/useGetBookings";
import BookingCard from "./BookingCard";

// Booked flights
// This component displays the booked flights

export default function BookedFlights() {
  const { data: bookings } = useGetBookings();

  if (!bookings)
    return (
      <div className="mx-auto flex items-center justify-normal text-xl text-primary">
        No Booked Flight Found
      </div>
    );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">My Flights:</h1>
        <p className="text-sm text-primary dark:text-primary-foreground">
          {bookings.length} booking(s) found.
        </p>
      </div>
      <div className="flex flex-col gap-16">
        {bookings?.map((booking) => (
          <BookingCard key={booking._id} flightId={booking.flightId} />
        ))}
      </div>
    </div>
  );
}
