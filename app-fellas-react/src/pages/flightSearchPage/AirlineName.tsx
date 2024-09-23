import useAirlineName from "@/hooks/useAirlineName";
import { useToast } from "@/hooks/use-toast";

export default function BookingCardAirlineName({
  prefixICAO,
}: {
  prefixICAO: string;
}) {
  const { toast } = useToast();
  const { airlineName, error, isLoading } = useAirlineName(prefixICAO);

  if (error)
    toast({
      title: `Can't fetch airline name ${prefixICAO}`,
      description: "An error occured",
      variant: "destructive",
    });

  if (isLoading)
    return <p className="text-center text-sm text-gray-500">Loading...</p>;

  return <p className="text-center text-sm text-gray-500">{airlineName}</p>;
}
