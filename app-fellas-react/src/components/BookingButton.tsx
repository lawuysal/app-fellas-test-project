import { useBookFlight } from "@/hooks/useBookFlight";
import { Button } from "./ui/button";
import { useGetBookings } from "@/hooks/useGetBookings";
import { useDeleteBookedFlight } from "@/hooks/useDeleteBookedFlight";

// Booking button for the flight card
// Changes text based on the booking status
// Gets disabled if the flight is in the past

export default function BookingButton({
  flightId,
  scheduleDateTime,
}: {
  flightId: string;
  scheduleDateTime: string;
}) {
  const { data: bookings } = useGetBookings();
  const { mutate: bookFlight } = useBookFlight();
  const { mutate: cancelBooking } = useDeleteBookedFlight();

  function handleButtonClick() {
    if (bookings?.some((booking) => booking.flightId === flightId)) {
      const id = bookings?.find(
        (booking) => booking.flightId === flightId,
      )?._id;
      console.log(id);
      cancelBooking(id as string);
    } else {
      bookFlight(flightId);
    }
  }

  function getButtonText() {
    return bookings?.some((booking) => booking.flightId === flightId)
      ? "Cancel Booking"
      : "Book Flight";
  }

  function handleButtonDisable() {
    if (scheduleDateTime < new Date().toISOString()) {
      return true;
    }
    return false;
  }

  return (
    <Button
      variant={
        bookings?.some((booking) => booking.flightId === flightId)
          ? "destructive"
          : "default"
      }
      className="absolute bottom-0 right-0 max-w-fit rounded-bl-none rounded-tr-none px-10 py-6 font-[550]"
      onClick={handleButtonClick}
      disabled={handleButtonDisable()}
    >
      {getButtonText()}
    </Button>
  );
}
