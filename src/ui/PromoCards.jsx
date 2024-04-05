import React from "react";
import styled from "styled-components";
import { TbDiscount2 } from "react-icons/tb";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-grey-50);
  color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 25px;
    height: auto;
  }
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
  bottom: 10px;
  text-align: left;
`;

const CouponCode = styled.p`
  font-weight: bold;
`;

const Card1 = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-image: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url("/promo1.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Card2 = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-image: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url("/promo2.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

function PromoCards() {
  return (
    <Container>
      <CardWrapper>
        <Card1>
          <Title>
            <TbDiscount2 />
          </Title>
          <Discount>Get 20% off on your next purchase!</Discount>
          <CouponCode>Coupon code: PROMO20</CouponCode>
          <Terms>
            *Terms and conditions apply. Offer valid for a limited time.
          </Terms>
        </Card1>
      </CardWrapper>
      <CardWrapper>
        <Card2>
          <Title>
            <TbDiscount2 />
          </Title>
          <Discount>Get 30% off on all items!</Discount>
          <CouponCode>Coupon code: APRIL30</CouponCode>
          <Terms>
            *Terms and conditions apply. Offer valid till end of the month.
          </Terms>
        </Card2>
      </CardWrapper>
    </Container>
  );
}

export default PromoCards;
