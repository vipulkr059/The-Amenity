import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { useMoveBack } from "../hooks/useMoveBack";
import ButtonText from "../ui/ButtonText";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  const moveBack = useMoveBack();

  return (
    <StyledHeader>
      <ButtonText onClick={moveBack}>&larr; Back</ButtonText>

      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
