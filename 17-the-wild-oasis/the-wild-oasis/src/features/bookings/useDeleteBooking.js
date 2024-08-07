import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings.js";
import toast from "react-hot-toast";

export const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success(`Booking successfully deleted.`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => {
      toast.error(`Booking couldn't be deleted.`);
    },
  });

  return { mutate, isDeleting };
};
