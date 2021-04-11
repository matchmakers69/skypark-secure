import styled from "styled-components";
import { device } from "styles/breakpoints";

const Container = styled.div`
  width: 100%;
  padding: 3rem;
  margin-right: auto;
  margin-left: auto;

  @media ${device.laptop} {
    max-width: 700px;
  }

  @media ${device.laptopL} {
    max-width: 960px;
  }

  @media ${device.desktop} {
    max-width: 1170px;
  }
`;

const Row = styled.div`
  width: calc(100% + 30px);
  margin: 0 -15px;
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  padding: 15px;

  flex-basis: 100%;
  max-width: 100%;

  @media ${device.mobile} {
    flex-basis: 50%;
    max-width: 50%;
  }

  @media ${device.tabletS} {
    flex-basis: 33.333%;
    max-width: 33.333%;
  }

  @media ${device.laptop} {
    flex-basis: 25%;
    max-width: 25%;
  }
`;

export const Styled = {
  Container,
  Row,
  Col,
};
