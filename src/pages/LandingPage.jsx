import React from "react";
import LandingNav from "../ui/LandingNav";
import CabinCard from "../ui/CabinCards";
import styled from "styled-components";
import Spinner from "../ui/Spinner";

import { useCabins } from "../features/cabins/useCabins";
import IconCarousel from "../ui/IconCarousel";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;
const LandingLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-50);
  margin-top: 5px;
`;
const CarouselContainer = styled.div`
  display: flex;
  box-shadow: var(--color-grey-200) 0px 3px 3px 0px;
`;
export const LandingPage = () => {
  const { cabins, isLoading } = useCabins();
  if (isLoading) return <Spinner />;
  return (
    <LandingLayout>
      {/* <LandingNav /> */}
      <CarouselContainer>
        <IconCarousel />
        <div style={{ flex: 30 }}> Filter/Sort</div>
      </CarouselContainer>
      <CardContainer>
        {cabins.map((cabin) => {
          return <CabinCard key={cabin.id} cabin={cabin} />;
        })}
      </CardContainer>
    </LandingLayout>
  );
};
