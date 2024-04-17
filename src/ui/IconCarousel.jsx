import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { icons } from "../data/data-icons";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  width: 100%;
`;

const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 3rem;
  margin: 0 10px;
  transition: transform 0.2s ease;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      transform: scale(1.1);
      color: var(--color-brand-600);
    `}
`;

const Carousel = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get("category") || icons.at(0).label;

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex + 5 < icons.length) {
      setStartIndex((prevIndex) => prevIndex + 5);
    }
  };

  const prevSlide = () => {
    if (startIndex - 5 >= 0) {
      setStartIndex((prevIndex) => prevIndex - 5);
    }
  };

  const handleClick = (value) => {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  };

  return (
    <Container>
      <FaChevronLeft
        onClick={prevSlide}
        style={{ fontSize: "2rem", cursor: "pointer" }}
      />
      <StoryContainer>
        {icons.slice(startIndex, startIndex + 5).map((IconComponent, i) => (
          <IconWrapper
            key={i + startIndex}
            onClick={() => handleClick(IconComponent.label)}
            active={IconComponent.label === currentFilter}
            disabled={IconComponent.label === currentFilter}
          >
            <IconComponent.icon />
            <p style={{ fontSize: "x-small" }}>{IconComponent.label}</p>
          </IconWrapper>
        ))}
      </StoryContainer>
      <FaChevronRight
        onClick={nextSlide}
        style={{ fontSize: "2rem", cursor: "pointer" }}
      />
    </Container>
  );
};

export default Carousel;
