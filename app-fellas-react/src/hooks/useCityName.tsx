import { useQuery } from "@tanstack/react-query";
import { Destination } from "@/types/Destination";
import { ENDPOINTS } from "@/api/endpoints";

export function useCityName(iata: string) {
  const {
    data: destination,
    error,
    isLoading,
  } = useQuery<Destination, Error>({
    queryKey: ["destination", iata],
    queryFn: () => {
      return fetch(`${ENDPOINTS.DESTINATIONS}/${iata}`)
        .then((res) => res.json())
        .then((data) => data);
    },
    retry: 0,
  });

  return {
    cityName: destination?.publicName.english,
    error,
    isLoading,
  };
}
