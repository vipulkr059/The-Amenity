import React from "react";
import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import { useUser } from "../features/authentication/useUser";
import { Logout } from "../features/authentication/Logout";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--color-grey-50);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const LogoContainer = styled.ul`
  height: 40px;
`;

const NavbarLink = styled.li`
  margin-right: 20px;
`;

const LandingNav = () => {
  const { user } = useUser();
  return (
    <NavbarContainer>
      <Logo height="7rem" />
      <NavbarLinks>
        <NavbarLink>
          <DarkModeToggle />
        </NavbarLink>
        {!user && (
          <>
            <NavbarLink>Log In</NavbarLink>
            <NavbarLink>Sign Up</NavbarLink>
          </>
        )}
        <NavbarLink>{/* <UserAvatar /> */}</NavbarLink>
        <Logout />
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default LandingNav;
