import React from "react";
import "../styles/error-message.css";

const ErrorMessage = ({ message }) => {
  if ((message = "Request failed with status code 404")) {
    return (
      <h1 className="message-element">Sorry this location does not exist.</h1>
    );
  } else {
    return <h1 className="message-element">{message}</h1>;
  }
};

export default ErrorMessage;
