import React from "react";
import CabinCard from "../ui/CabinCards";
import styled from "styled-components";
import Spinner from "../ui/Spinner";
import { useCabins } from "../features/cabins/useCabins";
import IconCarousel from "../ui/IconCarousel";
import { CabinTableOperations } from "../features/cabins/CabinTableOperations";
import { useSearchParams } from "react-router-dom";
import {
  filterAccommodations,
  filterCabins,
  sortCabins,
} from "../utils/filters";

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
  min-width: 0;
`;

export const LandingPage = () => {
  const { cabins, isLoading } = useCabins();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  const filterValue = searchParams.get("discount") || "all";
  const categoryFilter = searchParams.get("category") || "all";

  let filteredCabins = filterCabins(cabins, filterValue);

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");

  let sortedCabins = sortCabins(filteredCabins, field, direction);

  sortedCabins = filterAccommodations(sortedCabins, categoryFilter);

  return (
    <LandingLayout>
      <CarouselContainer>
        <CarouselContent>
          <CabinTableOperations />
        </CarouselContent>
        <CarouselContent>
          <IconCarousel />
        </CarouselContent>
      </CarouselContainer>
      <CardContainer>
        {sortedCabins.map((cabin) => {
          return <CabinCard key={cabin.id} cabin={cabin} />;
        })}
      </CardContainer>
    </LandingLayout>
  );
};
