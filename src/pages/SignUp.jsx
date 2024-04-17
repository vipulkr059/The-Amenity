import React from "react";
import styled from "styled-components";
import Logo from "../ui/Logo";
import SignupForm from "../ui/SignupForm";
import ButtonText from "../ui/ButtonText";
import { useMoveBack } from "../hooks/useMoveBack";
import { FaHome } from "react-icons/fa";

const Container = styled.div`
  background-color: var(--color-grey-50);
  height: 100vh;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  flex-direction: column;
  /* gap: 1rem; */
`;

const Signup = () => {
  const moveback = useMoveBack();

  return (
    <Container>
      <ButtonText
        style={{
          display: "flex",
          padding: "4px",
          alignItems: "center",
          gap: "2px",
        }}
        onClick={moveback}
      >
        <FaHome /> Home
      </ButtonText>
      <Logo />
      <SignupForm />
    </Container>
  );
};

export default Signup;
