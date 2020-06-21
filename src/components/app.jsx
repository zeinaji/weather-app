import React, { useState, useEffect } from "react";
import LocationDetails from "./location-details";
import ForecastSummaries from "./forecast-summaries";
import "../styles/app.css";
import ForecastDetails from "./forecast-details";
import axios from "axios";
import SearchForm from "./search-form";
import ErrorMessage from "./error-message";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({
    city: "",
    country: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const city = location.city;
    axios
      .get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
      .then((response) => {
        setForecasts(response.data.forecasts);
        setLocation({ city: response.data.location.city, country: "UK" });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, [errorMessage]);

  const [selectedDate, setSelectedDate] = useState(0);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (city) => {
    axios
      .get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
      .then((response) => {
        setForecasts(response.data.forecasts);
        setLocation({ city: response.data.location.city, country: "UK" });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  if (!errorMessage) {
    return (
      <div className="forecast">
        <div
          className="location-wrapper"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {location.city && (
            <LocationDetails city={location.city} country={location.country} />
          )}

          {location.city && <SearchForm handleSubmit={handleSubmit} />}
        </div>
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      </div>
    );
  } else {
    return (
      <div className="error-message">
        <ErrorMessage message={errorMessage} />
      </div>
    );
  }
};

export default App;
