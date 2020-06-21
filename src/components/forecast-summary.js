import React from "react";
import WeatherIcon from "react-icons-weather";
import moment from "moment";
import PropTypes from "prop-types";

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
  onSelect,
}) => {
  const iconId = icon;

  return (
    <div
      className="forecast-summary"
      style={{
        padding: "5px 5px 5px 5px",
      }}
    >
      <div className="date" data-testid="date-id">
        <span>{moment(date).format("ddd Do MMM")}</span>
      </div>
      <div className="icon" data-testid={iconId.toString()}>
        <span>
          <WeatherIcon name="owm" iconId={iconId.toString()} />
        </span>
      </div>
      <div className="temperature" data-testid="temperature-id">
        <span>{temperature}&deg;c</span>
      </div>
      <div className="description" data-testid="description-id">
        <span>{description}</span>
      </div>

      <button
        style={{
          fontFamily: "Balsamiq Sans, cursive",
          borderRadius: "5px",
          border: "0.5px solid rgb(53, 51, 51) ",
          cursor: "pointer",
          color: "rgb(53, 51, 51)",
        }}
        onClick={() => onSelect(date)}
      >
        More Details
      </button>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
