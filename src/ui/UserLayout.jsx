import { Outlet } from "react-router-dom";
import styled from "styled-components";
import LandingNav from "./LandingNav";
import MobileNavbar from "./MobileNav";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-50);
`;

const Main = styled.main`
  background-color: var(--color-grey-50);

  overflow: scroll;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function UserLayout() {
  return (
    <StyledAppLayout>
      <LandingNav />
      <MobileNavbar />
      <Outlet />
      <Footer />
    </StyledAppLayout>
  );
}

export default UserLayout;
