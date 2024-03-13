import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AdminProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();

  // Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  //if there is no auth user , redirect
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  //while Loading show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  const isAdmin = user.user_metadata.isAdmin;
  //if user render app
  if (isAuthenticated && isAdmin) return children;
};

export default AdminProtectedRoutes;
