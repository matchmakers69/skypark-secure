import React, { useState } from "react";
import PropTypes from "prop-types";
import { formValidate } from "utils/gifs";
import { Styled } from "./SearchInput.styled";

const SearchInput = ({ onSubmit, initialTerm }) => {
  const [searchQuery, setSearchQuery] = useState(initialTerm);

  const handleSearchSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  const validationError = formValidate(searchQuery);
  const isDisabled = Object.keys(validationError).some(x => validationError[x]);
  return (
    <Styled.SearchFormWrapper>
      <Styled.SearchForm novalidate onSubmit={handleSearchSubmit}>
        <Styled.SearchInput
          type="text"
          value={searchQuery}
          placeholder="Search gifs..."
          onChange={e => setSearchQuery(e.target.value)}
        />
        <Styled.SubmitButton disabled={isDisabled} type="submit">
          Search
        </Styled.SubmitButton>
      </Styled.SearchForm>
    </Styled.SearchFormWrapper>
  );
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchInput;
