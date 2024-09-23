import { Flight } from "@/types/Flight";
import { useQuery } from "@tanstack/react-query";

export default function useFlights() {
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

  return { flights, error, isLoading };
}
