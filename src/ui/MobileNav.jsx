import React, { useState } from "react";
import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import { useUser } from "../features/authentication/useUser";
import { Logout } from "../features/authentication/Logout";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--color-grey-0);
  position: relative;
  height: 7rem;
  z-index: 2;

  @media (min-width: 769px) {
    /* Hide the mobile navbar container on larger screens */
    display: none;
  }
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  flex-direction: column;
  background-color: var(--color-grey-0);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
`;

const NavbarLink = styled.li`
  margin-right: 25px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: large;

  &:hover {
    font-weight: bold;
  }
`;

const MenuIcon = styled(FaBars)`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavbar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <MenuIcon onClick={toggleMenu} />
      <LogoContainer>
        <Logo height="5rem" />
      </LogoContainer>

      <NavbarLinks isOpen={isOpen}>
        <NavbarLink onClick={() => navigate("/home")}>Home</NavbarLink>
        <NavbarLink onClick={() => navigate("/home")}>Explore</NavbarLink>
        {user.user_metadata.isAdmin && (
          <NavbarLink onClick={() => navigate("/dashboard")}>
            Dashboard
          </NavbarLink>
        )}

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

export default MobileNavbar;
