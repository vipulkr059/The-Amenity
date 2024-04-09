import React from "react";
import styled from "styled-components";
import ImageGrid from "../ui/ImageGrid";
import BookingForm from "../ui/BookingForm";
import { useCabinById } from "../features/cabins/useCabinById";
import Spinner from "../ui/Spinner";
import { CabinDetails } from "../ui/CabinDetails";
import { useMoveBack } from "../hooks/useMoveBack";
import ButtonText from "../ui/ButtonText";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-50);
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);
  border-radius: 15px;
  margin: 80px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px;
  }
`;

const InfoLeft = styled.div`
  flex: 1;
  max-height: 650px;
  overflow-y: auto;
  margin-left: 20px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 768px) {
    max-height: none;
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

const InfoRight = styled.div`
  flex: 1;
  margin-left: 20px;
  position: sticky;
  top: 0;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 80px;
  width: 70%;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px;
  }
`;

const MainImage = styled.img`
  width: 50%;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    height: auto;
  }
`;

const Reservation = () => {
  const { cabin, isLoading } = useCabinById();
  const moveBack = useMoveBack();
  if (isLoading) return <Spinner />;
  const { images } = cabin;

  const mainImage = images[0];

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "100%",
          padding: "25px",
        }}
      >
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </div>
      <ImagesContainer>
        {/* Main image */}
        <MainImage src={mainImage} alt="Main" />

        {/* Small images */}
        <ImageGrid images={images} />
      </ImagesContainer>
      <InfoSection>
        <InfoLeft>
          <CabinDetails cabin={cabin} />
        </InfoLeft>
        <InfoRight>
          <BookingForm />
        </InfoRight>
      </InfoSection>
    </Container>
  );
};

export default Reservation;
