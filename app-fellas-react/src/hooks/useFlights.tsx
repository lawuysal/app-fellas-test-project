import { ENDPOINTS } from "@/api/endpoints";
import { Flight } from "@/types/Flight";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

// This hook is used to get the flights based on the search parameters

export default function useFlights() {
  const [searchParams] = useSearchParams();
  const flightQueries = searchParams.toString();

  const {
    data: flights,
    error,
    isLoading,
  } = useQuery<Flight[], Error>({
    queryKey: ["flights", flightQueries],
    queryFn: () => {
      return fetch(`${ENDPOINTS.FLIGHTS}/${flightQueries}`)
        .then((res) => res.json())
        .then((data) => data.flights);
    },
    retry: 0,
  });

  return { flights, error, isLoading };
}
