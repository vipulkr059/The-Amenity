import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: ${(props) => props.height};
  width: auto;
`;

function Logo({ height }) {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode
    ? "/logo-no-background.png"
    : "/logo-no-background.png";
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" height={height ? height : "12.6rem"} />
    </StyledLogo>
  );
}

export default Logo;
