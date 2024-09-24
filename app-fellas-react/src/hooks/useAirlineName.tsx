import { ENDPOINTS } from "@/api/endpoints";
import { Airline } from "@/types/Airline";
import { useQuery } from "@tanstack/react-query";

// This hook is used to get the airline name from the prefixICAO

export default function useAirlineName(prefixICAO: string) {
  const {
    data: airline,
    error,
    isLoading,
  } = useQuery<Airline, Error>({
    queryKey: ["airline", prefixICAO],
    queryFn: () => {
      return fetch(`${ENDPOINTS.AIRLINES}/${prefixICAO}`)
        .then((res) => res.json())
        .then((data) => data);
    },
    retry: 0,
  });

  if (airline?.publicName) {
    return { airlineName: airline.publicName, isLoading, error };
  } else {
    return { airlineName: "Unknown Airline", isLoading, error };
  }
}
