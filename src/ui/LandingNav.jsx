import React from "react";
import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import { useUser } from "../features/authentication/useUser";
import { Logout } from "../features/authentication/Logout";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--color-grey-50);
  box-shadow: var(--color-grey-200) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const LogoContainer = styled.ul``;

const NavbarLink = styled.li`
  margin-right: 25px;
`;

const LandingNav = () => {
  const { user } = useUser();
  console.log(user);
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <LogoContainer onClick={() => navigate("/home")}>
        <Logo height="7rem" />
      </LogoContainer>

      <NavbarLinks>
        {user.user_metadata.isAdmin && <NavbarLink>Dashboard</NavbarLink>}
        <NavbarLink>
          <UserAvatar />
        </NavbarLink>
        <NavbarLink>
          <DarkModeToggle />
        </NavbarLink>
        {!user && (
          <>
            <NavbarLink>Log In</NavbarLink>
            <NavbarLink>Sign Up</NavbarLink>
          </>
        )}

        <Logout />
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default LandingNav;
