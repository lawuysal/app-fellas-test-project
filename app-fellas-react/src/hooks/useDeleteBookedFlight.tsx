import { ENDPOINTS } from "@/api/endpoints";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

// This hook is used to delete a booked flight

export function useDeleteBookedFlight() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["createBooking"],
    mutationFn: (bookingId: string) =>
      fetch(`${ENDPOINTS.BOOKINGS}/${bookingId}`, {
        method: "DELETE",
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
        title: "Can't delete the booked flight",
        description: error.message,
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Booking deleted",
        description: "You have successfully deleted the booking",
      });

      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["flights"], exact: false });
    },
  });
}
