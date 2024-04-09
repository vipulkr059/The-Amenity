import { useQuery } from "@tanstack/react-query";
import { getCabinById } from "../../services/apiCabins";
import { useParams } from "react-router-dom";

export function useCabinById() {
  const { id: cabinId } = useParams();
  const {
    isLoading,
    data: cabin,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: () => getCabinById(cabinId),
  });

  return { isLoading, error, cabin };
}
