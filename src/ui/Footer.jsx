import React from "react";
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
`;

const FooterLink = styled.a`
  margin: 0 10px;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        &copy; {new Date().getFullYear()} The Amenity, Designed and Developed by
        @vipulkr059
      </div>
      {/* <FooterLinks>
        <FooterLink href="#">Home</FooterLink>
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">Services</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinks> */}
    </FooterContainer>
  );
};

export default Footer;
