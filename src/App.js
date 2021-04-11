import React from "react";
import MainTemplate from "./templates/MainTemplate";
import Layout from "./Layout";
import Routes from "./routes";

const App = () => {
  return (
    <MainTemplate>
      <Layout>
        <Routes />
      </Layout>
    </MainTemplate>
  );
};

export default App;
