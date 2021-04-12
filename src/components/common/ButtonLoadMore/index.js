import React from "react";
import PropTypes from "prop-types";
import { LoadMoreBtn } from "./ButtonLoadMore.styled";

const ButtonLoadMore = ({ text, onClick, disabled = false }) => {
  return (
    <LoadMoreBtn data-testid="loadMore" disabled={disabled} onClick={onClick}>
      {text}
    </LoadMoreBtn>
  );
};

ButtonLoadMore.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default ButtonLoadMore;
