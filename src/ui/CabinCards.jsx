import React, { useState } from "react";
import styled from "styled-components";
import { FaBed } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  max-height: 400px;
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px; /* Adjust height of carousel as needed */
`;

const Carousel = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  padding: 10px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const Price = styled.p`
  margin: 5px 0;
  font-size: 16px;
  font-weight: bolder;
`;
const Discount = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: green;
`;
const Capacity = styled.p`
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
const images = [
  "https://via.placeholder.com/300x200?text=Image1",
  "https://via.placeholder.com/300x200?text=Image2",
  "https://via.placeholder.com/300x200?text=Image3",
];

const CabinCard = ({ cabin }) => {
  const [index, setIndex] = useState(0);
  const { id, name, description, image, regularPrice, maxCapacity, discount } =
    cabin;

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
          {/* {images.map((image, i) => ( */}
          <Image src={image} />
          {/* ))} */}
        </Carousel>
        <ButtonContainer>
          <Buttons onClick={prevSlide}>&#10094;</Buttons>
          <Buttons onClick={nextSlide}>&#10095;</Buttons>
        </ButtonContainer>
      </CarouselContainer>
      <InfoContainer>
        <Title>{name}</Title>
        <Price>
          &#36;{regularPrice}{" "}
          <span style={{ fontSize: "14px", fontWeight: "normal" }}>night</span>
        </Price>
        <Discount>
          <MdDiscount /> -&#36;{discount}
        </Discount>
        <Capacity>
          <FaBed /> {maxCapacity}
        </Capacity>
        <Button onClick={() => navigate(`/booking/${id}`)}>Book Now</Button>
      </InfoContainer>
    </CardContainer>
  );
};
export default CabinCard;
