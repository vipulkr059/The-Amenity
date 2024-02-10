import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabins, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newCabinData, id }) => updateCabin(newCabinData, id),
    onSuccess: () => {
      toast.success(" Cabin updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editCabins, isUpdating };
}
