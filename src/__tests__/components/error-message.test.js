import React from "react";
import { render } from "@testing-library/react";
import ErrorMessage from "../../components/error-message";

it("renders the correct city and location props", () => {
  const { getByText } = render(
    <ErrorMessage message="This is an error message" />
  );

  expect(getByText("Sorry this location does not exist.")).toHaveClass(
    "message-element"
  );
});
