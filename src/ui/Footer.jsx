import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--color-indigo-700);
  color: var(--color-grey-100);
  padding: 20px;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 2.5rem;
`;

const FooterLink = styled.a`
  margin: 0 10px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        &copy; {new Date().getFullYear()} The Amenity, Designed and Developed by
        Vipul
        {/* <FaHeart style={{ color: "red" }} /> */}
      </div>
      <FooterLinks>
        <FooterLink href="https://github.com/vipulkr059">
          <FaGithub />
        </FooterLink>
        <FooterLink href="https://www.linkedin.com/in/vipul-kumar-520465215/">
          <FaLinkedinIn />
        </FooterLink>
        {/* <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">Services</FooterLink>
        <FooterLink href="#">Contact</FooterLink> */}
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
