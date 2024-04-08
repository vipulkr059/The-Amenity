import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { useDeleteBooking } from "../features/bookings/useDeleteBooking";
import ConfirmDelete from "./ConfirmDelete";
import Tag from "./Tag";
import { statusToTagName } from "../data/data-bookings";
import BookingDataBox from "../features/bookings/BookingDataBox";

const Card = styled.div`
  background-color: var(--color-grey-0);
  border-radius: 10px;
  padding: 20px;
`;

const CardText = styled.p`
  margin: 20px;
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

const BookingCard = ({ booking }) => {
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const { numNights, numGuests, totalPrice, status } = booking;
  return (
    <Card>
      <CardText>
        <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
      </CardText>
      <BookingDataBox booking={booking} />
      {status === "unconfirmed" && (
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
      )}
    </Card>
  );
};

export default BookingCard;
