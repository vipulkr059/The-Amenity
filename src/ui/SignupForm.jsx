import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useUserSignup } from "../features/authentication/useUserSignup";
import { useCreateGuest } from "../features/guest/useCreateGuest";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";
import Input from "../ui/Input";

const FormContainer = styled.form`
  width: 350px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  font-size: 1.4rem;
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
    border: 1px solid var(--color-grey-300);
    border-radius: 4px;
    transition: border-color 0.3s ease;
    background-color: var(--color-grey-0);

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

const SignupForm = () => {
  const { signup, isLoading } = useUserSignup();
  const { createGuest, isCreating } = useCreateGuest();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ fullName, email, password, nationalID, nationality }) => {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
    createGuest(
      { fullName, email, nationalID, nationality },
      {
        onSettled: () => {
          reset();
          navigate("/login");
        },
      }
    );
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <label htmlFor="fullName">Full Name</label>
        <Input
          {...register("fullName", { required: "Full name is required" })}
        />
        {errors.fullName && <span>{errors.fullName.message}</span>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input
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
        <Input
          {...register("nationality", {
            required: "Nationality is required",
          })}
        />
        {errors.nationality && <span>{errors.nationality.message}</span>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="nationalID">National ID</label>
        <Input
          {...register("nationalID", { required: "National ID is required" })}
        />
        {errors.nationalID && <span>{errors.nationalID.message}</span>}
      </FormGroup>
      {/* <SubmitButton type="submit">Sign Up</SubmitButton> */}
      <Button size="large" disabled={isLoading}>
        {!isLoading || !isCreating ? "Sign Up" : <SpinnerMini />}
      </Button>
    </FormContainer>
  );
};

export default SignupForm;
