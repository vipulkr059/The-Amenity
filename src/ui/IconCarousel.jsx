import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { icons } from "../data/data-icons";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  width: 70%;
  flex: 70;
  background-color: var(--color-grey-50);
`;

const StoryContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  font-size: 3rem;
  margin: 0 10px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === icons.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? icons.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container>
      <FaChevronLeft
        onClick={prevSlide}
        style={{ fontSize: "2rem", cursor: "pointer" }}
      />
      <StoryContainer>
        {icons.map((IconComponent, i) => (
          <IconWrapper
            key={i}
            style={{
              transform: `translateX(${(i - index) * 50}%) scale(${
                i === index ? 1.1 : 0.8
              })`,
            }}
          >
            <IconComponent />
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
