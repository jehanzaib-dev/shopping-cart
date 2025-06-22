import React from "react";
import "./LoaderStyles.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
