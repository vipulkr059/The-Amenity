// Card.js
import React from "react";
import styled, { css } from "styled-components";
import { GoHome } from "react-icons/go";
import { FaRupeeSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const CardWrapper = styled.div`
  width: 350px;
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
  overflow: hidden;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 2rem;
  margin: 5px;
`;

const Subtitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.5rem;
  margin: 5px;
  color: var(--color-grey-500);
`;

const Card = ({ imageUrl, title, subtitle, height, location, price }) => {
  return (
    <CardWrapper>
      {title && subtitle && (
        <>
          <Title>{title}</Title>
          <Subtitle>
            {" "}
            <GoHome /> {subtitle}
          </Subtitle>
        </>
      )}
      <ImageWrapper height={height}>
        <Image src={imageUrl} alt="Placeholder" />
      </ImageWrapper>
      {location && price && (
        <>
          <Title>
            <FaLocationDot />
            {"  "}
            {location}
          </Title>
          <Subtitle>
            {" "}
            <FaRupeeSign /> {price}
          </Subtitle>
        </>
      )}
    </CardWrapper>
  );
};

export default Card;
