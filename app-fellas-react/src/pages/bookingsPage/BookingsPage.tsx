import BookedFlights from "./BookedFlights";

export default function BookingsPage() {
  return (
    <div className="mx-auto mt-8 grid min-h-[calc(100vh-88px)] max-w-7xl grid-cols-[3fr_1fr] pb-40 transition-all duration-300 ease-linear">
      <BookedFlights />
    </div>
  );
}
