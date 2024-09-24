import { useToast } from "@/hooks/use-toast";
import { useCityName } from "@/hooks/useCityName";

// City name in the flight and booking card

export default function CityName({
  iata,
  flightDirection,
}: {
  iata: string;
  flightDirection: string;
}) {
  const { toast } = useToast();
  const { cityName, error, isLoading } = useCityName(iata);

  if (error)
    toast({
      title: `Can't fetch airline name ${iata}`,
      description: "An error occured",
      variant: "destructive",
    });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <p>
      {flightDirection === "A"
        ? `${cityName} - Amsterdam`
        : `Amsterdam - ${cityName}`}
    </p>
  );
}
