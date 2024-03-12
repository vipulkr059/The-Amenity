import React from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // Here you can perform actions like submitting the form data to a server
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          {...register("fullName", { required: "Full name is required" })}
        />
        {errors.fullName && <span>{errors.fullName.message}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
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
      </div>
      <div>
        <label htmlFor="nationality">Nationality</label>
        <input
          {...register("nationality", { required: "Nationality is required" })}
        />
        {errors.nationality && <span>{errors.nationality.message}</span>}
      </div>
      <div>
        <label htmlFor="nationalID">National ID</label>
        <input
          {...register("nationalID", { required: "National ID is required" })}
        />
        {errors.nationalID && <span>{errors.nationalID.message}</span>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
