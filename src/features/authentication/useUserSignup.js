import { useMutation } from "@tanstack/react-query";
import { userSignup } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUserSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: userSignup,
    onSuccess: () => {
      toast.success("Account Created Successfully");
    },
  });

  return { signup, isLoading };
}
