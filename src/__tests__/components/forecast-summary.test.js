import React from "react";
import { cleanup, render } from "@testing-library/react";
import ForecastSummary from "../../components/forecast-summary";

afterEach(cleanup);

describe("ForecastSummary", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    );

    expect(asFragment).toMatchSnapshot();
  });

  it("renders the correct props", () => {
    const { getByText } = render(
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    );

    const date = getByText("mockDate");
    expect(date.closest("div")).toHaveClass("date");

    const temperature = getByText("mockTemperature°C");
    expect(temperature.closest("div")).toHaveClass("temperature");

    const description = getByText("mockDescription");
    expect(description.closest("div")).toHaveClass("description");

    const icon = getByText("mockIcon");
    expect(icon.closest("div")).toHaveClass("icon");
  });
});
