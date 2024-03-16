import React from "react";
import styled from "styled-components";

// Styled Components
const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const GridItem = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`;

// ImageGrid Component
const ImageGrid = ({ images }) => {
  console.log(images);
  return (
    <GridContainer>
      {images.slice(0, 2).map((image, index) => (
        <GridItem key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
      {images.slice(0, 2).map((image, index) => (
        <GridItem key={index + 2} src={image} alt={`Image ${index + 3}`} />
      ))}
    </GridContainer>
  );
};

export default ImageGrid;
