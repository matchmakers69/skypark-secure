import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const { push } = useHistory();
  const handleBackToHomePage = () => {
    push("/");
  };
  return (
    <div>
      404 Sorry Page does not exist
      <button onClick={handleBackToHomePage} type="button">
        Back home
      </button>
    </div>
  );
};

export default NotFound;
