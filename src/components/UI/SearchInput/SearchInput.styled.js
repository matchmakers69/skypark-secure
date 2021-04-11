import styled from "styled-components";

const SearchFormWrapper = styled.div`
  margin: 2rem auto;
  width: 100%;
  max-width: 40rem;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  height: 4rem;
  background-color: ${({ theme: { palette } }) => palette.colors.white};
  width: calc(100% - 110px);
  padding: 5px 10px;
  border: 1px solid ${({ theme: { palette } }) => palette.colors.greyBorder};
  border-right: none;
`;

const SubmitButton = styled.button`
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: ${({ theme: { palette } }) => palette.colors.white};
  background-color: ${({ theme: { palette } }) => palette.colors.lightGreen};
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const Styled = {
  SearchFormWrapper,
  SearchForm,
  SearchInput,
  SubmitButton,
};
