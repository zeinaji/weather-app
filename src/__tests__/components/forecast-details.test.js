import React from "react";
import { cleanup, render } from "@testing-library/react";
import ForecastDetails from "../../components/forecast-details";
import moment from "moment";

afterEach(cleanup);
const forecast = {
  date: 1525046400000,
  temperature: {
    max: 11,
    min: 6,
  },
  wind: {
    speed: 12,
    direction: "mockDirection",
  },
  humidity: 50,
  description: "mockDescription",
  icon: "mockIcon",
};

describe("ForecastDetails", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={forecast} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct props", () => {
    const { getByText } = render(<ForecastDetails forecast={forecast} />);

    const formattedDate = moment(forecast.date).format("ddd Do MMM");
    const date = getByText(formattedDate);
    expect(date.closest("div")).toHaveClass("date-details");

    const maxTemp = getByText(/11/);
    expect(maxTemp.closest("div")).toHaveClass("max-temperature");

    const minTemp = getByText(/6/);
    expect(minTemp.closest("div")).toHaveClass("min-temperature");

    const windSpeed = getByText(/12/);
    expect(windSpeed.closest("div")).toHaveClass("wind-speed");

    const windDirection = getByText("mockDirection");
    expect(windDirection.closest("div")).toHaveClass("wind-direction");
  });
});
