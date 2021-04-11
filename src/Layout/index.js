import React from "react";
import PropTypes from "prop-types";
import Header from "components/UI/Header";
import Footer from "components/UI/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
