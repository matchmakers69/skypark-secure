import styled from "styled-components";

const GifWrapper = styled.div`
  padding: 10px;
  background-color: ${({ theme: { palette } }) => palette.colors.white};
  border: 1px solid ${({ theme: { palette } }) => palette.colors.greyBorder};
  > span {
    width: 100%;
    overflow: hidden;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    width: 100%;
  }
`;

export const Styled = {
  GifWrapper,
};
