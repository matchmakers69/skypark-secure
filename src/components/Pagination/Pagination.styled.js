import styled from "styled-components";

const PaginationBar = styled.nav`
  width: 100%;
  min-height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { palette } }) => palette.colors.lightGreen};
`;

const ButtonWrapper = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PaginationButton = styled.button`
  cursor: pointer;
  height: 3.5rem;
  padding: 0 22px;
  background-color: ${({ theme: { palette } }) => palette.colors.yellow};
  color: ${({ theme: { palette } }) => palette.colors.pink};
  border: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const Styled = {
  PaginationBar,
  ButtonWrapper,
  PaginationButton,
};
