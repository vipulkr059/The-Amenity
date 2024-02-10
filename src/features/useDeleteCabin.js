import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteCabins } from "../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin(params) {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabins,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Cabin deleted successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
