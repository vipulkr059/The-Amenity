import React from "react";
import LandingNav from "../ui/LandingNav";
import CabinCard from "../ui/CabinCards";
import styled from "styled-components";
import Spinner from "../ui/Spinner";

import { useCabins } from "../features/cabins/useCabins";
import IconCarousel from "../ui/IconCarousel";
import { CabinTableOperations } from "../features/cabins/CabinTableOperations";
import { useSearchParams } from "react-router-dom";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const LandingLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-100);
  margin-top: 5px;
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: var(--color-grey-200) 0px 3px 3px 0px;
  background-color: var(--color-grey-50);
  padding: 20px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const CarouselContent = styled.div`
  flex: 1;
  min-width: 0; /* Ensure flex items can shrink */
`;

export const LandingPage = () => {
  const { cabins, isLoading } = useCabins();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <LandingLayout>
      <CarouselContainer>
        <CarouselContent>
          <CabinTableOperations />
        </CarouselContent>
        {/* <CarouselContent>
          <IconCarousel />
        </CarouselContent> */}
      </CarouselContainer>
      <CardContainer>
        {sortedCabins.map((cabin) => {
          return <CabinCard key={cabin.id} cabin={cabin} />;
        })}
      </CardContainer>
    </LandingLayout>
  );
};
