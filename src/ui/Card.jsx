// Card.js
import React from "react";
import styled, { css } from "styled-components";
import { GoHome } from "react-icons/go";

const CardWrapper = styled.div`
  width: 350px;
  border-radius: 5px;
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
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-top: 10px;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: #666;
`;

const Card = ({ imageUrl, title, subtitle, height }) => {
  return (
    <CardWrapper>
      <Title>{title}</Title>
      <Subtitle>
        {" "}
        <GoHome /> {subtitle}
      </Subtitle>
      <ImageWrapper height={height}>
        <Image src={imageUrl} alt="Placeholder" />
      </ImageWrapper>
    </CardWrapper>
  );
};

export default Card;
