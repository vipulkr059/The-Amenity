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
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const BigCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 508px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: left;
`;

const Description = styled.p`
  margin-bottom: 20px;
  text-align: left;
`;

const Discount = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
`;

const Terms = styled.p`
  font-size: 0.9rem;
  margin-top: auto;
  text-align: left;
`;

const CouponCode = styled.p`
  font-weight: bold;
  text-align: left;
`;

function HomeFeatures() {
  return (
    <Container>
      <LeftSide>
        <SmallCard>
          <Title>Explore more to get your comfort zone</Title>
          <Description>Book your perfect stay with us.</Description>
        </SmallCard>
        <SmallCard>
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
