import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Styled } from "styles/grid";
import { Styled as GifStyled } from "./GiftsList.styled";
import PropTypes from "prop-types";

const GifsList = ({ gifs }) => {
  return (
    <Styled.Row>
      {gifs.map(gif => {
        return (
          <Styled.Col key={gif}>
            <GifStyled.GifWrapper>
              <LazyLoadImage alt={gif} effect="blur" src={gif} />
            </GifStyled.GifWrapper>
          </Styled.Col>
        );
      })}
    </Styled.Row>
  );
};

GifsList.propTypes = {
  gifs: PropTypes.instanceOf(Array).isRequired,
};

export default GifsList;
