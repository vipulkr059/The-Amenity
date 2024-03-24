import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useBookingByCabin } from "../features/bookings/useBookingByCabin";
import Spinner from "../ui/Spinner";
import { subtractDates } from "../utils/helpers";
import { useCreateBooking } from "../features/bookings/useCreateBooking";
import { useCabinById } from "../features/cabins/useCabinById";
import { useEffect, useState } from "react";
import { useGuestByEmail } from "../features/guest/useGuestByEmail";
import { useUser } from "../features/authentication/useUser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .line {
    border-bottom: 1px solid #ccc; /* Divider line */
    padding-bottom: 15px;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Form = styled.form`
  width: 400px;
  padding: 40px;
  background-color: var(--color-grey-0);
  border-radius: 15px;
  box-shadow: 0 4px 8px var(--color-grey-100);
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: var(--color-brand-600);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-800);
  }
`;

const CheckboxLabel = styled.label`
  font-size: 16px;
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

const Calculated = styled.div`
  display: flex;
  justify-content: space-between;
`;

function BookingForm() {
  const [numNights, setNumNights] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const { cabin } = useCabinById();
  const { bookedDates, isLoading } = useBookingByCabin();
  const { createBooking, isCreating } = useCreateBooking();
  const { user } = useUser();
  const { guest } = useGuestByEmail(user.email);

  useEffect(() => {
    if (watch("startDate") && watch("endDate")) {
      const nights = subtractDates(watch("endDate"), watch("startDate"));
      setNumNights(nights);
      const stayCharge = nights * cabin.regularPrice;
      const additionals = 5 * watch("numGuests");

      setTotalPrice(stayCharge + additionals);
    }
  }, [
    watch("startDate"),
    watch("endDate"),
    watch("numGuests"),
    watch("hasBreakfast"),
    totalPrice,
    numNights,
  ]);

  if (isLoading || isCreating) return <Spinner />;

  const startDates = bookedDates.map((date) => date.startDate.substring(0, 10));
  const endDates = bookedDates.map((date) => date.endDate.substring(0, 10));

  const onSubmit = (data) => {
    console.log(data.endDate);
    const numNights = subtractDates(data.endDate, data.startDate);
    const cabinPrice = cabin.regularPrice * numNights;
    const extrasPrice = data.hasBreakfast ? 5 * numNights : 0;
    createBooking(
      {
        ...data,
        numNights: numNights,
        isPaid: false,
        guestId: guest.id,
        cabinId: id,
        totalPrice: cabinPrice + extrasPrice - cabin.discount,
        cabinPrice: cabinPrice,
        extrasPrice: extrasPrice,
        status: "unconfirmed",
      },
      {
        onSuccess: (data) => {
          reset();
          setNumNights(0);
          setTotalPrice(0);
        },
      }
    );
  };

  const isDateBooked = (date) => {
    return startDates.includes(date) || endDates.includes(date);
  };

  return (
    <Container>
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
          min="0"
          type="number"
          {...register("numGuests", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Number of guests should be more than 1",
            },
            max: {
              value: cabin.maxCapacity,
              message: "Number of guests should be less than capacity",
            },
          })}
        />
        {errors.numGuests && (
          <ErrorMessage>{errors.numGuests.message}</ErrorMessage>
        )}

        <CheckboxLabel>
          <CheckboxInput type="checkbox" {...register("hasBreakfast")} />
          Include Breakfast
        </CheckboxLabel>

        <br />
        <br />

        <Calculated>
          <Label>
            &#36;{cabin.regularPrice} x {numNights} nights
          </Label>
          <Label>
            &#36;
            {cabin.regularPrice * numNights}
          </Label>
        </Calculated>

        <Calculated className="line">
          {watch("hasBreakfast") && (
            <>
              <Label>
                BreakFast: &#36;{5} x {watch("numGuests")} guests
              </Label>
              <Label>
                &#36;
                {5 * watch("numGuests")}
              </Label>
            </>
          )}
        </Calculated>
        <br />
        <Calculated>
          <Label>Total Price :</Label>
          <Label> &#36;{totalPrice}</Label>
        </Calculated>

        <div>
          <Button type="submit" size="large">
            Book Now
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default BookingForm;
