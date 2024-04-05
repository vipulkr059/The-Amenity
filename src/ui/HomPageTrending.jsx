import React from "react";
import styled from "styled-components";
import Card from "./Card";

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
  return (
    <Container>
      <Headings>
        {" "}
        <Title>Discover your destination</Title>
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
        />
        <Card
          height="150px"
          imageUrl="/cabin.jpg"
          title="Cabins"
          subtitle="12,458"
        />
        <Card
          height="150px"
          imageUrl="/resorts.jpg"
          title="Resorts"
          subtitle="7,541"
        />
        <Card
          height="150px"
          imageUrl="/apartments.jpg"
          title="Apartments"
          subtitle="13,005"
        />
      </Column>
      <Headings>
        <Title>Top Trending Hotels</Title>
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
