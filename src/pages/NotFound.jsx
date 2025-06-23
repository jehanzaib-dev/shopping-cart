import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundStyles.css";

const NotFound = () => {
  return (
    <div className="container not-found">
      <h1 className="bounce">404</h1>
      <p className="fade-in">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-btn fade-in">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
