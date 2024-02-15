import { useMutation } from "@tanstack/react-query";
import { updateCurrentUser as updateUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser(params) {
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      toast.success("User info updated successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isUpdating };
}
