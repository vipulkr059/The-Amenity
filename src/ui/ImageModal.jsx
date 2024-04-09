import React, { useState } from "react";
import styled from "styled-components";

const OpenImage = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ImageContainer onClick={toggleOpen}>
      <Image src={imageUrl} alt="Open Image" />
      {isOpen && (
        <ImageModal onClick={toggleOpen}>
          <ModalContent src={imageUrl} alt="Open Image" />
        </ImageModal>
      )}
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

export default OpenImage;
