import React from "react";
import styled from "styled-components";
import HomeImage from "../ui/HomeImage";
import HomPageTrending from "../ui/HomPageTrending";
import PromoCards from "../ui/PromoCards";
import HomeFeatures from "../ui/HomeFeatures";
import Footer from "../ui/Footer";
import LandingNav from "../ui/LandingNav";
import MobileNavbar from "../ui/MobileNav";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--color-grey-50);
`;

export default function HomePage() {
  return (
    <HomePageContainer>
      <HomeImage />
      <LandingNav
        width={"100%"}
        background={"tranparent"}
        position={"absolute"}
        color={"white"}
      />
      <MobileNavbar
        position={"absolute"}
        background={"tranparent"}
        width={"100%"}
      />
      <HomPageTrending />
      <PromoCards />
      <HomeFeatures />
      <Footer />
    </HomePageContainer>
  );
}
