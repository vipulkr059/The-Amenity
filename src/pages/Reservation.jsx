import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useBookingByCabin } from "../features/bookings/useBookingByCabin";
import Spinner from "../ui/Spinner";
import { subtractDates } from "../utils/helpers";
import { useCreateBooking } from "../features/bookings/useCreateBooking";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 400px;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CheckboxLabel = styled.label`
  font-size: 16px;
  color: #333;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
`;

const ErrorMessage = styled.p`
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 14px;
  color: red;
`;

function Reservation() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { bookedDates, isLoading } = useBookingByCabin();
  const { createBooking, isCreating } = useCreateBooking();
  if (isLoading || isCreating) return <Spinner />;
  console.log(bookedDates);

  const startDates = bookedDates.map((date) => date.startDate.substring(0, 10));
  const endDates = bookedDates.map((date) => date.endDate.substring(0, 10));

  const onSubmit = (data) => {
    const numNights = subtractDates(data.endDate, data.startDate);
    createBooking(
      {
        ...data,
        numNights: numNights,
        isPaid: false,
        guestId: 5,
        cabinId: id,
        totalPrice: 250 * numNights,
        cabinPrice: 250,
        extrasPrice: 5 * numNights,
        status: "unconfirmed",
      },
      {
        onSuccess: (data) => {
          reset();
        },
      }
    );
  };

  const isDateBooked = (date) => {
    console.log(date);
    return startDates.includes(date) || endDates.includes(date);
  };

  return (
    <Container>
      <h1 style={{ marginBottom: "20px" }}>Booking for Hotel {id}</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Check-In Date</Label>
        <Input
          type="date"
          {...register("startDate", { required: true })}
          min={new Date().toISOString()[0]} // Prevent selecting past dates
          max={watch("endDate") || undefined} // Maximum date is the check-out date if specified
          disabled={watch("endDate") && isDateBooked(watch("endDate"))} // Disable the date if already booked
        />
        {errors.startDate && (
          <ErrorMessage>This field is required.</ErrorMessage>
        )}
        <Label>Check-Out Date</Label>
        <Input
          type="date"
          {...register("endDate", { required: true })}
          min={watch("startDate") || new Date().toISOString().split("T")[0]} // Minimum date is the check-in date if specified
          disabled={watch("startDate") && isDateBooked(watch("startDate"))} // Disable the date if already booked
        />
        {errors.endDate && <ErrorMessage>This field is required.</ErrorMessage>}
        <Label>Number Of Guests</Label>
        <Input
          type="number"
          {...register("numGuests", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Number of guests should be more than 1",
            },
          })}

          // Minimum 1 guest req
        />
        {errors.numGuests && (
          <ErrorMessage>{errors.numGuests.message}</ErrorMessage>
        )}
        <CheckboxLabel>
          <CheckboxInput type="checkbox" {...register("hasBreakfast")} />
          Include Breakfast
        </CheckboxLabel>
        <Button type="submit">Book Now</Button>
      </Form>
    </Container>
  );
}

export default Reservation;
