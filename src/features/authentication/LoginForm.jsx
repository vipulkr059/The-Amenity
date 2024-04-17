import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Logo from "../../ui/Logo";
import Heading from "../../ui/Heading";
import SpinnerMini from "../../ui/SpinnerMini";

import { useLogin } from "./useLogin";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address" orientation="vertical">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label="Password" orientation="vertical">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow orientation="vertical">
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Log In" : <SpinnerMini />}
        </Button>
      </FormRow>
      <FormRow orientation="vertical">
        <p
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "var(--color-indigo-700)",
          }}
          onClick={() => navigate("/signup")}
        >
          New User ? Create Account
        </p>
      </FormRow>
      <FormRow orientation="vertical">
        <p>Demo Account</p>
        <p>User : DevAmenity@amenity.com - Pwd : 12345678</p>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
