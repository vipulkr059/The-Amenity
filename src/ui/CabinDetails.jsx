import styled from "styled-components";
import { MdBedroomParent } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { amenites } from "../data/data-icons";

const SectionContainer = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  .line {
    border-bottom: 1px solid #ccc; /* Divider line */
    padding-bottom: 15px;
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const InfoItem = styled.li`
  margin-bottom: 8px;
  font-size: large;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto; /* Two columns */
  grid-gap: 15px; /* Gap between grid items */
`;

const GridItem = styled.div`
  background-color: var(--color-grey-0);
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px var(--color-grey-200);
  font-size: medium;
`;

export const CabinDetails = ({ cabin }) => {
  const { maxCapacity, description, images } = cabin;

  return (
    <SectionContainer>
      <Heading className="line">Hotel Information</Heading>
      <InfoList>
        <InfoItem>
          {" "}
          <FaLocationDot /> Location: {"Himachal India"}
        </InfoItem>
        <InfoItem>
          <FaUserGroup /> Capacity: {maxCapacity}
        </InfoItem>
        <InfoItem className="line">
          <MdBedroomParent /> Bedrooms: {2}
        </InfoItem>
        <br />
        <InfoItem className="line">{description}</InfoItem>
      </InfoList>
      <br />
      <Heading>What this place offers</Heading>

      <GridContainer className="line">
        {amenites.map((amenity, index) => {
          return (
            <GridItem key={index}>
              <amenity.icon />
              <br />
              {amenity.label}
            </GridItem>
          );
        })}
      </GridContainer>
      <br />
      <Heading>Where you'll sleep</Heading>
      <GridContainer>
        {images.map((image, index) => {
          return (
            <GridItem key={index}>
              <img src={image} alt="image of bedrooms" />
            </GridItem>
          );
        })}
      </GridContainer>
    </SectionContainer>
  );
};
