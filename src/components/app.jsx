import React, { useState, useEffect } from "react";
import LocationDetails from "./location-details";
import ForecastSummaries from "./forecast-summaries";
import "../styles/app.css";
import axios from "axios";
import SearchForm from "./search-form";
import ErrorMessage from "./error-message";
import ReactModal from "./modal";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [forecasts, setForecasts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [location, setLocation] = useState({
    city: "",
    country: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const city = location.city;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`
        );

        setForecasts(response.data.forecasts);
        setLocation({ city: response.data.location.city, country: "UK" });
      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [errorMessage]);

  const [selectedDate, setSelectedDate] = useState(0);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (city) => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`
        );

        setForecasts(response.data.forecasts);
        setLocation({ city: response.data.location.city, country: "UK" });
      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoading(false);
    };
    fetchProduct();
  };

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  } else if (!errorMessage) {
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
        {selectedForecast && (
          <ReactModal
            forecast={selectedForecast}
            openModal={modalIsOpen}
            closeModal={handleCloseModal}
          />
        )}
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
