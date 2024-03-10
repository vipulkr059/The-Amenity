import React from "react";
import LandingNav from "../ui/LandingNav";
import CabinCard from "../ui/CabinCards";
import styled from "styled-components";
import Spinner from "../ui/Spinner";

import { useCabins } from "../features/cabins/useCabins";

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
`;
export const LandingPage = () => {
  const { cabins, isLoading } = useCabins();
  if (isLoading) return <Spinner />;
  return (
    <LandingLayout>
      <LandingNav />
      <CardContainer>
        {cabins.map((cabin) => {
          return <CabinCard key={cabin.id} cabin={cabin} />;
        })}
      </CardContainer>
    </LandingLayout>
  );
};
