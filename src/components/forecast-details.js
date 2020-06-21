import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const ForecastDetails = ({ forecast }) => {
  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="date-details" data-testid="date-id">
          <span style={{ fontSize: "50px" }}>
            {moment(forecast.date).format("ddd Do MMM")}
          </span>
        </div>

        <div
          className="max-temperature"
          data-testid="max-temperature-id"
          style={{ fontSize: "25px" }}
        >
          Max temperature:{" "}
          <span style={{ opacity: ".5" }}>
            {forecast.temperature.max}&deg;c
          </span>
        </div>
        <div
          className="min-temperature"
          data-testid="min-temperature-id"
          style={{ fontSize: "25px" }}
        >
          Min temperature:{" "}
          <span style={{ opacity: ".5" }}>
            {" "}
            {forecast.temperature.min}&deg;c
          </span>
        </div>
        <div
          className="humidity"
          data-testid="humidity"
          style={{ fontSize: "25px" }}
        >
          Humidity: <span style={{ opacity: ".5" }}>{forecast.humidity}</span>
        </div>
        <div
          className="wind-speed"
          data-testid="wind-speed"
          style={{ fontSize: "25px" }}
        >
          Wind speed:{" "}
          <span style={{ opacity: ".5" }}>{forecast.wind.speed}</span>
        </div>
        <div
          className="wind-direction"
          data-testid="wind-direction"
          style={{ fontSize: "25px" }}
        >
          Wind direction:{" "}
          <span style={{ opacity: ".5" }}> {forecast.wind.direction}</span>
        </div>
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      direction: PropTypes.string.isRequired,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    description: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};

export default ForecastDetails;
