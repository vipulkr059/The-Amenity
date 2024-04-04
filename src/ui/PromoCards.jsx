import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-grey-50);
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 320px;
  margin: 50px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Semi-transparent white background */
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Description = styled.p`
  margin-bottom: 20px;
`;

const Discount = styled.p`
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 10px;
`;

const Terms = styled.p`
  font-size: 0.9rem;
  margin-top: auto; /* Aligns terms at the bottom */
  text-align: left;
`;

const CouponCode = styled.p`
  font-weight: bold;
`;

const Card1 = styled(Card)`
  background-image: url("/HomePage.jpg");
  background-size: cover;
  background-position: center;
`;

const Card2 = styled(Card)`
  background-image: url("/HomePage.jpg");
  background-size: cover;
  background-position: center;
`;

function PromoCards() {
  return (
    <Container>
      <CardWrapper>
        <Card1>
          <Title>Promo Card 1</Title>
          <Description>This is the first promo card.</Description>
          <Discount>Get 20% off on your next purchase!</Discount>

          <CouponCode>Coupon code: PROMO20</CouponCode>
          <Terms>
            Terms and conditions apply. Offer valid for a limited time.
          </Terms>
        </Card1>
      </CardWrapper>
      <CardWrapper>
        <Card2>
          <Title>Promo Card 2</Title>
          <Description>This is the second promo card.</Description>
          <Discount>Get 30% off on all items!</Discount>
          <CouponCode>Coupon code: APRIL30</CouponCode>
          <Terms>
            Terms and conditions apply. Offer valid till end of the month.
          </Terms>
        </Card2>
      </CardWrapper>
    </Container>
  );
}

export default PromoCards;
