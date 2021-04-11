import styled from "styled-components";

const AppHeader = styled.header`
  width: 100%;
  height: 6rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${({ theme: { palette } }) => palette.colors.darkGreen};
`;

export { AppHeader };
