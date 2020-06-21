import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/search-form";

describe("SearchForm", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
