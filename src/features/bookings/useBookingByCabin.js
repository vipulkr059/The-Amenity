import { useQuery } from "@tanstack/react-query";
import { getBookingByCabinId } from "../../services/apiBookings";
import { useParams } from "react-router-dom";
export function useBookingByCabin() {
  const { id: cabinId } = useParams();
  console.log(cabinId);
  const {
    isLoading,
    data: bookedDates,
    error,
  } = useQuery({
    queryKey: ["bookedDates"],
    queryFn: () => getBookingByCabinId(cabinId),
    retry: false,
  });

  return { isLoading, bookedDates, error };
}
