import Image from "next/image";

import styles from "./ReviewsSection.module.css";

const determineStarPercentageHighlight = (starRating, maxStarRating) => {
  if (starRating > maxStarRating) {
    console.error(
      "Star rating cannot be higher than max star rating in reviews widget."
    );
    return;
  }
  if (!starRating || !maxStarRating) {
    console.error(
      "Star rating or max star rating not provided in reviews widget."
    );
    return;
  }
  if (isNaN(starRating) || isNaN(maxStarRating)) {
    console.error(
      "Star rating or max star rating is not being provided as type number."
    );
    return;
  }

  return (starRating / maxStarRating) * 100;
};

const ReviewsSection = (props) => {
  const starsHighlightPercentage = determineStarPercentageHighlight(
    props.ratingAverageNum,
    props.maxRatingNum
  );

  return (
    <section className={styles["reviews-section"]}>
      <div className={styles["reviews-section__top-bar"]}>
        <div className={styles["reviews-section__rating-container"]}>
          <span className={styles["reviews-section__rating-text"]}>
            {props.ratingTerm}
          </span>
          <div className={styles["reviews-section__rating-stars"]}>
            <div
              className={styles["reviews-section__rating-stars-highlight"]}
              style={{ width: `${starsHighlightPercentage}%` }}
            ></div>
            <Image
              className={styles["reviews-section__rating-star-icon"]}
              height={35}
              width={35}
              src="/png/star-icon.png"
              alt="A star icon"
            />
            <Image
              className={styles["reviews-section__rating-star-icon"]}
              height={35}
              width={35}
              src="/png/star-icon.png"
              alt="A star icon"
            />
            <Image
              className={styles["reviews-section__rating-star-icon"]}
              height={35}
              width={35}
              src="/png/star-icon.png"
              alt="A star icon"
            />
            <Image
              className={styles["reviews-section__rating-star-icon"]}
              height={35}
              width={35}
              src="/png/star-icon.png"
              alt="A star icon"
            />
            <Image
              className={styles["reviews-section__rating-star-icon"]}
              height={35}
              width={35}
              src="/png/star-icon.png"
              alt="A star icon"
            />
          </div>
        </div>
        <div className={styles["reviews-section__count-container"]}>
          <div className={styles["reviews-section__count-block"]}>
            <span className={styles["reviews-section__count-number"]}>
              {props.ratingAverageNum}
            </span>
            <span className={styles["reviews-section__count-text"]}>
              Average
            </span>
          </div>
          <div className={styles["reviews-section__count-block"]}>
            <span className={styles["reviews-section__count-number"]}>
              {props.reviewNum}
            </span>
            <span className={styles["reviews-section__count-text"]}>
              Reviews
            </span>
          </div>
        </div>
        <Image height={75} width={150} src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <div className={styles["reviews-section__carousel"]}>Carousel</div>
    </section>
  );
};

export default ReviewsSection;
