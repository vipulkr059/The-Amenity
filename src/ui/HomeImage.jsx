import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  /* padding-top: 56.25%;
  overflow: hidden; */
  background-color: var(--color-grey-50);
  padding: 10px;
  border-radius: 15px;
`;
const Image = styled.img`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire div */
  border-radius: 15px;
`;
const VignetteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  height: 100%;
`;

const VignetteOverlay = styled.div`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );

  border-radius: 15px;
`;

const Heading = styled.h2`
  position: absolute;
  bottom: 20px;
  left: 50px;
  color: white;
  font-size: 5vw;
`;

export default function HomeImage() {
  return (
    <Container>
      <Image src={"/HomePage.jpg"} alt="Image" />
      <VignetteContainer>
        <VignetteOverlay />
      </VignetteContainer>

      <Heading>Find Your Best Staycation</Heading>
    </Container>
  );
}
