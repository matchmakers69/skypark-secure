import styled from "styled-components";

const LoadMoreBtn = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 4rem;
  padding: 0 20px;
  font-size: 1.4rem;
  background-color: ${({ theme: { palette } }) => palette.colors.pink};
  color: ${({ theme: { palette } }) => palette.colors.white};
`;

export { LoadMoreBtn };
