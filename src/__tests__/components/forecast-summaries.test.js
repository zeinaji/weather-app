import React from "react";
import { cleanup, render } from "@testing-library/react";
import ForecastSummaries from "../../components/forecast-summaries";

const forecasts = [
  {
    date: 123,
    description: "date1",
    icon: "800",
    temperature: {
      max: 999,
    },
  },
  {
    date: 456,
    description: "date2",
    icon: "800",
    temperature: {
      max: 777,
    },
  },
];

afterEach(cleanup);

describe("ForecastSummaries", () => {
  it("renders correctly to match ForecastSummaries snapshot", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={forecasts} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct amount of ForecastSummary component props", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={forecasts} />
    );
    expect(getAllByTestId("date-id").length).toBe(2);
    expect(getAllByTestId("description-id")).toHaveLength(2);
    expect(getAllByTestId("800")).toHaveLength(2);
    expect(getAllByTestId("temperature-id")).toHaveLength(2);
  });
});
