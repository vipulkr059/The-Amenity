import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Logo from "../ui/Logo";
import { useUserSignup } from "../features/authentication/useUserSignup";
import { useCreateGuest } from "../features/guest/useCreateGuest";

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }

  span {
    color: red;
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignupForm = () => {
  const { signup, isLoading } = useUserSignup();
  const { createGuest, isCreating } = useCreateGuest();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ fullName, email, password, nationalID, nationality }) => {
    console.log(fullName);
    // Here you can perform actions like submitting the form data to a server
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
    createGuest(
      { fullName, email, nationalID, nationality },
      {
        onSettled: () => reset(),
      }
    );
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Logo />
      <FormGroup>
        <label htmlFor="fullName">Full Name</label>
        <input
          {...register("fullName", { required: "Full name is required" })}
        />
        {errors.fullName && <span>{errors.fullName.message}</span>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="nationality">Nationality</label>
        <input
          {...register("nationality", { required: "Nationality is required" })}
        />
        {errors.nationality && <span>{errors.nationality.message}</span>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="nationalID">National ID</label>
        <input
          {...register("nationalID", { required: "National ID is required" })}
        />
        {errors.nationalID && <span>{errors.nationalID.message}</span>}
      </FormGroup>
      <SubmitButton type="submit">Sign Up</SubmitButton>
    </FormContainer>
  );
};

export default SignupForm;
