import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ReviewsSection from "./ReviewsSection";

describe("ReviewsSection component", () => {
  test("displays five star images", () => {
    render(<ReviewsSection imgSrc="/png/placeholder.jpg" />);

    const allStarImages = screen.getAllByAltText("A star icon");

    expect(allStarImages.length).toBe(5);
  });

  test("displays rating text in span tag", () => {
    render(
      <ReviewsSection ratingTerm={"Excellent"} imgSrc="/png/star-icon.png" />
    );

    const ratingText = screen.getByText(/excellent/i);

    expect(ratingText).toBeInTheDocument();
  });

  test("displays overall review and rating numbers", () => {
    render(
      <ReviewsSection
        ratingAverageNum={4}
        reviewNum={120}
        imgSrc="/png/star-icon.png"
      />
    );

    const ratingAverage = screen.getByText("4");
    const reviewNumber = screen.getByText("120");

    expect(ratingAverage).toHaveTextContent("4");
    expect(reviewNumber).toHaveTextContent("120");
  });
});
