import React from "react";
import { constants } from "../../../constants";
import { Styled } from "./Navigation.styled";

const { TRENDY_GIFS, SEARCH_GIFS } = constants.routes;

const Navigation = () => {
  return (
    <Styled.NavigationList>
      <Styled.NavigationListItem>
        <Styled.NavigationListItemLink to={TRENDY_GIFS}>Trendy Gifs</Styled.NavigationListItemLink>
      </Styled.NavigationListItem>
      <Styled.NavigationListItem>
        <Styled.NavigationListItemLink to={SEARCH_GIFS}>Search Gifs</Styled.NavigationListItemLink>
      </Styled.NavigationListItem>
    </Styled.NavigationList>
  );
};

export default Navigation;
