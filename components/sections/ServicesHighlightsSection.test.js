import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ServicesHighlightSection from "./ServicesHighlightsSection";

describe("ServicesHighlightsSection", () => {
  test("contains a H2 header title", () => {
    render(<ServicesHighlightSection title="Popular Services" />);

    const title = screen.getByText(/popular services/i);

    expect(title).toBeInTheDocument();
  });

  test("contains five service card components", () => {
    render(<ServicesHighlightSection />);

    const allServiceCardElements = screen.getAllByTestId("service-card");

    expect(allServiceCardElements).toHaveLength(5);
  });
});
