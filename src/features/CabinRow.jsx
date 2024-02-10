import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins } from "../services/apiCabins";
import toast from "react-hot-toast";
import { HiPencil, HiTrash } from "react-icons/hi2";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

export const CabinRow = ({ cabin }) => {
  const {
    id: cabinId,
    name,
    image,
    regularPrice,
    discount,
    maxCapacity,
  } = cabin;
  const queryClient = useQueryClient();
  const [showForm, setshowForm] = useState(false);
  const { isLoading, mutate } = useMutation({
    mutationFn: deleteCabins,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Cabin deleted successfully");
    },
    onError: (err) => toast.error(err.message),
  });
  return (
    <>
      <TableRow>
        <Img src={image} alt="cabin image" />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity}</div>
        <Price>{regularPrice}</Price>
        <Discount>{discount}</Discount>
        <div>
          <button
            onClick={() => setshowForm((show) => !show)}
            disabled={isLoading}
          >
            <HiPencil />
          </button>
          <button onClick={() => mutate(cabinId)} disabled={isLoading}>
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
};
