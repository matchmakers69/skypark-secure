import styled from "styled-components";

const AppFooter = styled.footer`
  height: 4rem;
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${({ theme: { palette } }) => palette.colors.darkBlue};
  color: ${({ theme: { palette } }) => palette.colors.white};
  font-size: 1.4rem;
  padding: 0 3rem;
`;

export { AppFooter };
