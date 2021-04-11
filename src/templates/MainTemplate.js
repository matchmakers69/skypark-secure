import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "../theme/GlobalStyles";

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
