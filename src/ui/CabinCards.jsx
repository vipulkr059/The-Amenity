import React, { useState } from "react";
import styled from "styled-components";
import { FaBed, FaUser, FaUsers } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { max } from "date-fns";

const CardContainer = styled.div`
  position: relative;
  /* border: 1px solid #ccc; */
  border-radius: 15px;
  overflow: hidden;
  max-height: 500px;
  background-color: var(--color-grey-0);
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 300px; /* Adjust height of carousel as needed */
  border-radius: 15px;
`;

const Carousel = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  padding: 15px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const Price = styled.p`
  margin: 5px 0;
  font-size: 18px;
  font-weight: bolder;
`;
const Discount = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: green;
`;
const Capacity = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  font-size: 14px;
  font-weight: bolder;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 5px;
  font-size: 24px;
  outline: none;
  color: white;
`;

const CabinCard = ({ cabin }) => {
  const [index, setIndex] = useState(0);
  const { user } = useUser();
  const {
    id,
    description,
    images,
    regularPrice,
    maxCapacity,
    discount,
    location,
    bedrooms,
  } = cabin;

  const navigate = useNavigate();
  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <CardContainer>
      <CarouselContainer>
        <Carousel style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((image, i) => (
            <Image key={i} src={image} alt={`Image ${i + 1}`} />
          ))}
        </Carousel>
        <ButtonContainer>
          <Buttons onClick={prevSlide}>&#10094;</Buttons>
          <Buttons onClick={nextSlide}>&#10095;</Buttons>
        </ButtonContainer>
      </CarouselContainer>
      <InfoContainer>
        <Title>{location}</Title>
        <Price>
          &#36;{regularPrice}{" "}
          <span style={{ fontSize: "14px", fontWeight: "normal" }}>night</span>
        </Price>
        <Discount>
          <MdDiscount /> -&#36;{discount}
        </Discount>
        <Capacity>
          <span>
            <FaBed /> {bedrooms}
          </span>
          <span>
            <FaUsers /> {maxCapacity}
          </span>
        </Capacity>
        <Button
          onClick={() =>
            user ? navigate(`/booking/${id}`) : navigate(`/login`)
          }
        >
          Book Now
        </Button>
      </InfoContainer>
    </CardContainer>
  );
};
export default CabinCard;
