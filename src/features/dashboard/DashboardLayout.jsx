import { styled } from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
export default function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const { isLoading: isLoadingStays, confirmedStays } = useRecentStays();
  console.log(bookings);

  if (isLoadingBookings || isLoadingStays) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <div>Stats</div>
      <div>Today Activity</div>
      <div>Chart stays</div>
      <div>Chart Sales</div>
    </StyledDashboardLayout>
  );
}
