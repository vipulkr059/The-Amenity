import { useQuery } from "@tanstack/react-query";
import { getGuestByEmail } from "../../services/apiGuests";
export function useGuestByEmail(email) {
  const {
    isLoading,
    data: guest,
    error,
  } = useQuery({
    queryKey: ["guest"],
    queryFn: () => getGuestByEmail(email),
    retry: false,
  });

  return { isLoading, guest, error };
}
