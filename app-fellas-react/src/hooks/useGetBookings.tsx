import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS } from "@/api/endpoints";
import { Booking } from "@/types/Bookings";

// This hook is used to get the bookings

export function useGetBookings() {
  return useQuery<Booking[], Error>({
    queryKey: ["bookings"],
    queryFn: () =>
      fetch(ENDPOINTS.BOOKINGS).then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message);
        }

        return res.json();
      }),
  });
}
