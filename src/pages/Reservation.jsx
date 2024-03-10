// BookingPage.js
import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

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
  const [bookedDates, setBookedDates] = useState(["2024-03-15", "2024-03-16"]); // Example of already booked dates

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission, e.g., send data to backend or validate
  };

  const isDateBooked = (date) => {
    return bookedDates.includes(date);
  };

  return (
    <Container>
      <h1 style={{ marginBottom: "20px" }}>Booking for Hotel {id}</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Check-In Date</Label>
        <Input
          type="date"
          {...register("checkInDate", { required: true })}
          min={new Date().toISOString().split("T")[0]} // Prevent selecting past dates
          max={watch("checkOutDate") || undefined} // Maximum date is the check-out date if specified
          disabled={
            watch("checkOutDate") && isDateBooked(watch("checkOutDate"))
          } // Disable the date if already booked
        />
        {errors.checkInDate && (
          <ErrorMessage>This field is required.</ErrorMessage>
        )}
        <Label>Check-Out Date</Label>
        <Input
          type="date"
          {...register("checkOutDate", { required: true })}
          min={watch("checkInDate") || new Date().toISOString().split("T")[0]} // Minimum date is the check-in date if specified
          disabled={watch("checkInDate") && isDateBooked(watch("checkInDate"))} // Disable the date if already booked
        />
        {errors.checkOutDate && (
          <ErrorMessage>This field is required.</ErrorMessage>
        )}
        <Button type="submit">Book Now</Button>
      </Form>
    </Container>
  );
}

export default Reservation;
