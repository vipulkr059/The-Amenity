import { useQuery } from "@tanstack/react-query";
import { getBookingByGuestId } from "../../services/apiBookings";

export function useGetBookingsByGuest(guestId) {
  const {
    isLoading,
    data: guestBooking,
    error,
  } = useQuery({
    queryKey: ["guestBookings"],
    queryFn: () => getBookingByGuestId(guestId),
    retry: false,
  });
  console.log(guestBooking);
  return { isLoading, guestBooking, error };
}
