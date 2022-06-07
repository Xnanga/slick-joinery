import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import CallToActionButton from "./CallToActionButton";

describe("CallToActionButton component", () => {
  test("displays text", () => {
    render(
      <CallToActionButton
        buttonText="Get in touch"
        buttonIcon="/png/placeholder.jpg"
      />
    );

    const ctaButton = screen.getByRole("button");

    expect(ctaButton).toHaveTextContent("Get in touch");
  });

  // test("fires an event on click", () => {

  // });
});
