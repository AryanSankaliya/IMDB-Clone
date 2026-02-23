import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">Oops! Page Not Found</h2>
      <p className="error-description">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button className="home-button" onClick={() => (window.location.href = "/")}>
        Go Home
      </button>
    </div>
  );
};

export default Error;
