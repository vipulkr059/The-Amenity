import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import LandingNav from "./LandingNav";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-50);
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
`;
// const Container = styled.div`
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;
// `;

function UserLayout() {
  return (
    <StyledAppLayout>
      <LandingNav />
      <Main>
        {/* <Container> */}
        <Outlet />
        {/* </Container> */}
      </Main>
    </StyledAppLayout>
  );
}

export default UserLayout;
