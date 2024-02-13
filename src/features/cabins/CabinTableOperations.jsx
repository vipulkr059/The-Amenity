import React from "react";
import TableOperations from "../../ui/TableOperations";
import { Filter } from "../../ui/Filter";

const filterOption = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "no-discount",
    label: "No Discount",
  },
  {
    value: "with-discount",
    label: "With Discount",
  },
];

export const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter filterField="discount" options={filterOption} />
    </TableOperations>
  );
};
