import { ENDPOINTS } from "@/api/endpoints";
import { Flight } from "@/types/Flight";
import { useQuery } from "@tanstack/react-query";

// This hook is used to get the flight details
// Used for the my flight page's booking cards

export function useGetFlight(flightId: string) {
  return useQuery<Flight, Error>({
    queryKey: ["flight", flightId],
    queryFn: () =>
      fetch(`${ENDPOINTS.GET_FLIGHT}/${flightId}`).then(async (res) => {
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message);
        }

        return res.json();
      }),
  });
}
