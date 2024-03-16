import React from "react";
import styled from "styled-components";
import ImageGrid from "../ui/ImageGrid";
import BookingForm from "../ui/BookingForm";
import { useCabinById } from "../features/cabins/useCabinById";
import Spinner from "../ui/Spinner";
import { CabinDetails } from "../ui/CabinDetails";

// Styled Components
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
    flex-direction: column; /* Stack images vertically on smaller devices */
    margin: 20px; /* Adjust margin */
  }
`;

const InfoLeft = styled.div`
  flex: 1;
  max-height: 600px; /* Set a maximum height to enable scrolling */
  overflow-y: auto; /* Enable vertical scrolling */
  margin-left: 20px;
  overflow-y: scroll; /* Show scrollbar only when needed */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    width: 0; /* Hide scrollbar for Chrome, Safari, and Opera */
  }

  @media (max-width: 768px) {
    max-height: none; /* Remove maximum height on smaller devices */
    margin-left: 0; /* Reset margin */
    margin-bottom: 20px; /* Add some bottom margin for better spacing */
  }
`;

const InfoRight = styled.div`
  flex: 1;
  margin-left: 20px;
  position: sticky;
  top: 0; /* Stick to the top */

  @media (max-width: 768px) {
    margin-left: 0; /* Reset margin */
    margin-bottom: 20px; /* Add some bottom margin for better spacing */
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 80px;
  width: 70%;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack images vertically on smaller devices */
    margin: 20px; /* Adjust margin */
  }
`;

const MainImage = styled.img`
  width: 50%;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: none; /* Remove max-width on smaller devices */
    height: auto; /* Ensure image maintains aspect ratio */
  }
`;

const Reservation = () => {
  const { cabin, isLoading } = useCabinById();
  if (isLoading) return <Spinner />;
  const { images } = cabin;

  const mainImage = images[0]; // First image is the main image

  return (
    <Container>
      <ImagesContainer>
        {/* Main image */}
        <MainImage src={mainImage} alt="Main" />

        {/* Small images */}
        <ImageGrid images={images} />
      </ImagesContainer>
      <InfoSection>
        <InfoLeft>
          {/* <h2 >Hotel Information</h2>
          <p>Hotel Name: {name}</p>
          <p>Location: City, Country</p>
          <p>
            {description}
            {description}
            {description}
            {description}
          </p> */}
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
