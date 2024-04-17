import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsFire } from "react-icons/bs";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 50px;
  background-color: var(--color-grey-50);
`;

const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 20px;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;

  font-size: 3rem;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: var(--color-grey-500);
`;

const Headings = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  padding-left: 50px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding: 50px;
  }
`;

function HomPageTrending() {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <Container>
      <Headings>
        {" "}
        <Title>
          Discover your destination&nbsp;
          <ButtonIcon
            onClick={() => (user ? navigate("/explore") : navigate("/login"))}
          >
            <FaArrowRightLong />
          </ButtonIcon>
        </Title>
        <Subtitle>
          Expolore our range of property types for every traveler's prefrence
        </Subtitle>
      </Headings>
      <Column>
        <Card
          height="150px"
          imageUrl="/villas.jpg"
          title="Villas"
          subtitle="10,804"
          onClick={() => (user ? navigate("/explore") : navigate("/login"))}
        />
        <Card
          height="150px"
          imageUrl="/cabin.jpg"
          title="Cabins"
          subtitle="12,458"
          onClick={() => (user ? navigate("/explore") : navigate("/login"))}
        />
        <Card
          height="150px"
          imageUrl="/resorts.jpg"
          title="Resorts"
          subtitle="7,541"
          onClick={() => (user ? navigate("/explore") : navigate("/login"))}
        />
        <Card
          height="150px"
          imageUrl="/apartments.jpg"
          title="Apartments"
          subtitle="13,005"
          onClick={() => (user ? navigate("/explore") : navigate("/login"))}
        />
      </Column>
      <Headings>
        <Title>
          Top Trending Hotels &nbsp;{" "}
          <ButtonIcon onClick={() => navigate("/explore")}>
            <BsFire />
          </ButtonIcon>
        </Title>
        <Subtitle>
          Discover most trending hotels worldwide for an unforgettable
          experience
        </Subtitle>
      </Headings>
      <Column>
        <Card
          height="250px"
          imageUrl="/trending1.jpg"
          location="Dehradun, India"
          price="10,120"
        />
        <Card
          height="250px"
          imageUrl="/trending2.jpg"
          location="Shimla, India"
          price="8,000"
        />
        <Card
          height="250px"
          imageUrl="/trending3.jpg"
          location="Manali, India"
          price="5,000"
        />
        <Card
          height="250px"
          imageUrl="/trending4.jpg"
          location="Jibhi, India"
          price="13,005"
        />
      </Column>
    </Container>
  );
}

export default HomPageTrending;
