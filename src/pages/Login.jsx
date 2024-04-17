import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import ButtonText from "../ui/ButtonText";
import { useMoveBack } from "../hooks/useMoveBack";
import { FaHome } from "react-icons/fa";

const LoginLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 48rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background-color: var(--color-grey-50);
`;

const Login = () => {
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

      <LoginLayout>
        <Logo />
        <Heading as="h4">Log in to your Account</Heading>
        <LoginForm />
      </LoginLayout>
    </Container>
  );
};

export default Login;
