import React from "react";
import PropTypes from "prop-types";
import { GIFS_PART_QUANTITY } from "utils/gifs";
import { Styled } from "./Pagination.styled";

const Pagination = ({ onClick, offset, totalResults }) => {
  return (
    <Styled.PaginationBar>
      <Styled.ButtonWrapper>
        <Styled.PaginationButton disabled={offset <= 0} onClick={() => onClick("prev")}>
          Prev
        </Styled.PaginationButton>
        <Styled.PaginationButton disabled={offset + GIFS_PART_QUANTITY > totalResults} onClick={() => onClick("next")}>
          Next
        </Styled.PaginationButton>
      </Styled.ButtonWrapper>
    </Styled.PaginationBar>
  );
};

Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
};

export default Pagination;
