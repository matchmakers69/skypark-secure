import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavigationListItem = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

const NavigationListItemLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme: { palette } }) => palette.colors.white};
  font-weight: ${({ theme: { palette } }) => palette.weight.medium};
  font-size: 1.4rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  &.active {
    color: ${({ theme: { palette } }) => palette.colors.white};
    background-color: ${({ theme: { palette } }) => palette.colors.pink};
  }
`;

export const Styled = {
  NavigationList,
  NavigationListItem,
  NavigationListItemLink,
};
