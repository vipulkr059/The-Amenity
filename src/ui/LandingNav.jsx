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
  padding: 10px 20px;
  background-color: var(--color-grey-0);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }
`;

const LogoContainer = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const NavbarLink = styled.li`
  margin-right: 25px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: large;

  &:hover {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const LandingNav = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <LogoContainer onClick={() => navigate("/home")}>
        <Logo height="7rem" />
      </LogoContainer>

      <NavbarLinks>
        <NavbarLink onClick={() => navigate("/home")}>Home</NavbarLink>
        <NavbarLink onClick={() => navigate("/home")}>Explore</NavbarLink>
        {user.user_metadata.isAdmin && (
          <NavbarLink onClick={() => navigate("/dashboard")}>
            Dashboard
          </NavbarLink>
        )}
      </NavbarLinks>

      <NavbarLinks>
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
        <NavbarLink>
          <Logout />
        </NavbarLink>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default LandingNav;
