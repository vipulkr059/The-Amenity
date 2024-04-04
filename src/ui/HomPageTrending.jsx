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
  margin-left: 50px;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  margin-left: 50px;
  color: #666;
`;

function HomPageTrending() {
  return (
    <Container>
      <Title>Discover your destination</Title>
      <Subtitle>
        Expolore our range of property types for every traveler's prefrence
      </Subtitle>
      <Column>
        <Card
          height="150px"
          imageUrl="https://via.placeholder.com/250"
          title="Villas"
          subtitle="10,804"
        />
        <Card
          height="150px"
          imageUrl="https://via.placeholder.com/250"
          title="Cabins"
          subtitle="12,458"
        />
        <Card
          height="150px"
          imageUrl="https://via.placeholder.com/250"
          title="Resorts"
          subtitle="7,541"
        />
        <Card
          height="150px"
          imageUrl="https://via.placeholder.com/250"
          title="Apartments"
          subtitle="13,005"
        />
      </Column>
      <Title>Top Trending Hotels</Title>
      <Subtitle>
        Discover most trending hotels worldwide for an unforgettable experience
      </Subtitle>
      <Column>
        <Card
          height="250px"
          imageUrl="https://via.placeholder.com/250"
          title="Villas"
          subtitle="10,804"
        />
        <Card
          height="250px"
          imageUrl="https://via.placeholder.com/250"
          title="Cabins"
          subtitle="12,458"
        />
        <Card
          height="250px"
          imageUrl="https://via.placeholder.com/250"
          title="Resorts"
          subtitle="7,541"
        />
        <Card
          height="250px"
          imageUrl="https://via.placeholder.com/250"
          title="Apartments"
          subtitle="13,005"
        />
      </Column>
    </Container>
  );
}

export default HomPageTrending;
