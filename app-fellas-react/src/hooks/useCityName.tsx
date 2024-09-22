import { useQuery } from "@tanstack/react-query";
import { Destination } from "@/types/Destination";

export function useCityName(iata: string) {
  const {
    data: destination,
    error,
    isLoading,
  } = useQuery<Destination, Error>({
    queryKey: ["destination", iata],
    queryFn: () => {
      return fetch(`http://localhost:3004/destinations/${iata}`)
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
