import React from "react";
import styled from "styled-components";
import Logo from "../ui/Logo";
import SignupForm from "../ui/SignupForm";

const Container = styled.div`
  background-color: var(--color-grey-50);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

const Signup = () => {
  return (
    <Container>
      <Logo />
      <SignupForm />
    </Container>
  );
};

export default Signup;
