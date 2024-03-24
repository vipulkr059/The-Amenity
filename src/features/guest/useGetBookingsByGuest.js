import { useQuery } from "@tanstack/react-query";
import { getBookingByGuestId } from "../../services/apiBookings";

export function useGetBookingsByGuest(guestId) {
  const {
    isLoading,
    data: guestBookings,
    error,
  } = useQuery({
    queryKey: ["guestBookings"],
    queryFn: () => getBookingByGuestId(guestId),
    retry: false,
  });

  return { isLoading, guestBookings, error };
}
