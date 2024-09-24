import { ENDPOINTS } from "@/api/endpoints";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

// This hook is used to book a flight

export function useBookFlight() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["createBooking"],
    mutationFn: (flightId: string) =>
      fetch(ENDPOINTS.BOOKINGS, {
        method: "POST",
        body: JSON.stringify({ flightId }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (res) => {
          if (!res.ok) {
            const data = await res.json();
            throw new Error(data.message);
          }
          return res.json();
        })
        .catch((error) => {
          throw new Error(error.message);
        }),
    onError: (error) => {
      toast({
        title: "Can't book the flight",
        description: error.message,
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Flight booked",
        description: "You have successfully booked the flight",
      });

      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["flights"], exact: false });
    },
  });
}
