import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { cabins } from "../data/data-cabins";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import OpenImage from "./ImageModal";

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
  return (
    <GridContainer>
      <Modal>
        {images.slice(0, 2).map((image, index) => (
          <>
            {/* <Modal.Open opens="cabin-image"> */}
            <GridItem
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              onClick={<OpenImage imageUrl={image} />}
            />
            {/* </Modal.Open>
            <Modal.Window name="cabin-image">
              <OpenImage imageUrl={image} />
            </Modal.Window> */}
          </>
        ))}

        {images.slice(0, 2).map((image, index) => (
          <GridItem key={index + 2} src={image} alt={`Image ${index + 3}`} />
        ))}
      </Modal>
    </GridContainer>
  );
};

export default ImageGrid;
