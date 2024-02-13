import styled from "styled-components";

import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";

import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { Table } from "../../ui/Table";

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
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabins } = useCreateCabin();

  const {
    id: cabinId,
    name,
    image,
    regularPrice,
    discount,
    maxCapacity,
    description,
  } = cabin;

  const handleDuplicates = () => {
    createCabins({
      name: `Copy Of ${name}`,
      image,
      regularPrice,
      discount,
      maxCapacity,
      description,
    });
  };

  return (
    <Table.Row>
      <Img src={image} alt="cabin image" />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity}</div>
      <Price>{regularPrice}</Price>
      <Discount>{discount}</Discount>
      <div>
        <button disabled={isCreating} onClick={handleDuplicates}>
          <HiSquare2Stack />
        </button>
        <Modal>
          <Modal.Open opens="edit-form">
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name="edit-form">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Open opens="delete-cabin">
            <button disabled={isDeleting}>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name="delete-cabin">
            <ConfirmDelete
              resource="cabins"
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
};
