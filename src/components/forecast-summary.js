import React from "react";

const ForecastSummary = (props) => (
  <div className="forecast-summary">
    <div className="date">
      <span>{props.date}</span>
    </div>
    <div className="icon">
      <span>{props.icon}</span>
    </div>
    <div className="temperature">
      <span>{`${props.temperature}°C`}</span>
    </div>
    <div className="description">
      <span>{props.description}</span>
    </div>
  </div>
);

export default ForecastSummary;
