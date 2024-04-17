import React from "react";
import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import { useUser } from "../features/authentication/useUser";
import { Logout } from "../features/authentication/Logout";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  position: ${(props) => props.position || "static"};
  width: ${(props) => props.width || "auto"};
  background-color: ${(props) => props.background || "var(--color-grey-0)"};
  color: ${(props) => props.color || ""};

  @media (max-width: 768px) {
    display: none;
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
  cursor: pointer;
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

const LandingNav = ({ background, position, width, color }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <NavbarContainer
      position={position}
      width={width}
      background={background}
      color={color}
    >
      <LogoContainer onClick={() => navigate("/home")}>
        <Logo height="7rem" />
      </LogoContainer>

      <NavbarLinks>
        <NavbarLink onClick={() => navigate("/home")}>Home</NavbarLink>
        <NavbarLink
          onClick={() => (user ? navigate("/explore") : navigate("/login"))}
        >
          Explore
        </NavbarLink>
        {user && user.user_metadata.isAdmin && (
          <>
            <NavbarLink onClick={() => navigate("/dashboard")}>
              Dashboard
            </NavbarLink>
          </>
        )}
      </NavbarLinks>

      <NavbarLinks>
        {!user && (
          <>
            <NavbarLink onClick={() => navigate("/login")}>Log In</NavbarLink>
            <NavbarLink onClick={() => navigate("/signup")}>Sign Up</NavbarLink>
          </>
        )}

        {user && (
          <>
            <NavbarLink onClick={() => navigate("/profile")}>
              <UserAvatar color={color} />
            </NavbarLink>
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

export default LandingNav;
