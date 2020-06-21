import React from "react";
import { cleanup, render } from "@testing-library/react";
import ForecastSummary from "../../components/forecast-summary";
import moment from "moment";

afterEach(cleanup);

describe("ForecastSummary", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={1525046400000}
        temperature={11}
        description="mockDescription"
        icon="800"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={1525046400000}
        temperature={11}
        description="mockDescription"
        icon="800"
      />
    );
    const formattedDate = moment(1525046400000).format("ddd Do MMM");
    const date = getByText(formattedDate);
    expect(date.closest("div")).toHaveClass("date");

    const temperature = getByText(/11/);
    expect(temperature.closest("div")).toHaveClass("temperature");

    const description = getByText("mockDescription");
    expect(description.closest("div")).toHaveClass("description");

    const icon = getByTestId("800");
    expect(icon.closest("div")).toHaveClass("icon");
  });
});
