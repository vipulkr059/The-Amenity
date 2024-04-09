import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import { useUser } from "../features/authentication/useUser";
import { Logout } from "../features/authentication/Logout";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;

  height: 7rem;
  z-index: 2;
  position: ${(props) => props.position || "static"};
  width: ${(props) => props.width || "auto"};
  background-color: ${(props) => props.background || "var(--color-grey-0)"};

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  flex-direction: column;
  background-color: var(--color-grey-0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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
  z-index: 10;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavbar = ({ position, width, background }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer position={position} width={width} background={background}>
      <MenuIcon onClick={toggleMenu} />
      <LogoContainer>
        <Logo height="4rem" />
      </LogoContainer>

      <NavbarLinks isOpen={isOpen}>
        <NavbarLink onClick={() => navigate("/home")}>Home</NavbarLink>
        <NavbarLink onClick={() => navigate("/explore")}>Explore</NavbarLink>
        {user && user.user_metadata.isAdmin && (
          <NavbarLink onClick={() => navigate("/dashboard")}>
            Dashboard
          </NavbarLink>
        )}

        {!user && (
          <>
            <NavbarLink onClick={() => navigate("/login")}>Log In</NavbarLink>
            <NavbarLink onClick={() => navigate("/signup")}>Sign Up</NavbarLink>
          </>
        )}

        {user && (
          <>
            <NavbarLink>
              <ButtonIcon onClick={() => navigate("/profile")}>
                <HiOutlineUser />
              </ButtonIcon>
            </NavbarLink>
            <NavbarLink>
              <Logout />
            </NavbarLink>
          </>
        )}
        <NavbarLink>
          <DarkModeToggle />
        </NavbarLink>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default MobileNavbar;
