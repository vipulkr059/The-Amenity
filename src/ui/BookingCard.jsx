import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { useDeleteBooking } from "../features/bookings/useDeleteBooking";
import ConfirmDelete from "./ConfirmDelete";

const Card = styled.div`
  background-color: var(--color-grey-0);
  border-radius: 10px;
  padding: 20px;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const CardText = styled.p`
  margin-top: 10px;
`;

const CancelButton = styled.button`
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 10px;
`;

const BookingCard = ({ numNights, totalPrice, numGuests, id, status }) => {
  const { deleteBooking, isDeleting } = useDeleteBooking();
  return (
    <Card>
      {/* <CardImage src={imageUrl} alt="Card" /> */}
      <CardText>{totalPrice}</CardText>
      <CardText>{numGuests}</CardText>
      <CardText>{numNights}</CardText>
      <Modal>
        <Modal.Open opens="delete">
          <CancelButton>Cancel</CancelButton>
        </Modal.Open>
        <Modal.Window name="delete">
          <ConfirmDelete
            resource="booking"
            onConfirm={() => deleteBooking(id)}
          />
        </Modal.Window>
      </Modal>
    </Card>
  );
};

export default BookingCard;
