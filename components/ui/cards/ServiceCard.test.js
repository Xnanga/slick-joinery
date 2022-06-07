import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ServiceCard from "./ServiceCard";

describe("ServiceCard component", () => {
  test("displays an image", () => {
    render(
      <ServiceCard imgSrc="/png/hammer-icon.png" imgHeight={75} imgWidth={75} />
    );

    const displayedImage = screen.getByRole("img");

    expect(displayedImage).toBeInTheDocument();
  });

  test("displays a H3 heading", () => {
    render(
      <ServiceCard
        title="Joinery Work"
        imgSrc="/png/hammer-icon.png"
        imgHeight={75}
        imgWidth={75}
      />
    );

    const h3Heading = screen.getByText(/joinery work/i);

    expect(h3Heading).toBeInTheDocument();
    expect(h3Heading).toHaveTextContent("Joinery Work");
  });

  test("displays a description", () => {
    render(
      <ServiceCard
        description="This is our main joinery service"
        imgSrc="/png/hammer-icon.png"
        imgHeight={75}
        imgWidth={75}
      />
    );

    const descriptionText = screen.getByText(
      /this is our main joinery service/i
    );

    expect(descriptionText).toBeInTheDocument();
    expect(descriptionText).toHaveTextContent(
      "This is our main joinery service"
    );
  });
});
