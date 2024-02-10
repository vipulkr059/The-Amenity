import { useQueryClient, useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateSetting as updateSettings } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettings,
    onSuccess: () => {
      toast.success(" Setting updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateSetting, isUpdating };
}
