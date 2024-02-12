import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { CabinRow } from "./CabinRow";
import { useCabins } from "./useCabins";
import { Table } from "../../ui/Table";

export const CabinTable = () => {
  const { isLoading, cabins, error } = useCabins();

  if (isLoading) return <Spinner />;
  return (
    <Table role="table" columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header role="row">
        <div></div>
        <div>cabin</div>
        <div>capacity</div>
        <div>price</div>
        <div>discount</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={cabins}
        render={(cabin) => {
          return <CabinRow key={cabin.id} cabin={cabin} />;
        }}
      ></Table.Body>
      {/* {cabins.map((cabin) => {
        return <CabinRow key={cabin.id} cabin={cabin} />;
      })} */}
    </Table>
  );
};
