import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  gap: 2rem;
  padding: 25px;
  background-color: var(--color-grey-50);
  color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    height: auto;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  flex: 1;
`;

const RightSide = styled.div`
  width: 100%;
  flex: 2;
`;

const SmallCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;

  padding: 20px;
  background-image: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.95) 100%
    ),
    url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.025);
  }
`;

const BigCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 508px;

  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-image: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.95) 100%
    ),
    url("/bigcard.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.025);
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: larger;
  }
`;

const Description = styled.p`
  margin-bottom: 20px;
  text-align: left;
`;

function HomeFeatures() {
  return (
    <Container>
      <LeftSide>
        <SmallCard imageUrl={"/small1.jpg"}>
          <Title>Explore more to get your comfort zone</Title>
          <Description>Book your perfect stay with us.</Description>
        </SmallCard>
        <SmallCard imageUrl={"/small2.jpg"}>
          <Description>Hotel Available</Description>
          <Title>1000+</Title>
        </SmallCard>
      </LeftSide>
      <RightSide>
        <BigCard>
          <Title>Beyond accomodation, creating memories of lifetime</Title>
        </BigCard>
      </RightSide>
    </Container>
  );
}

export default HomeFeatures;
