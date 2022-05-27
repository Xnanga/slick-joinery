import styles from "./GlobalPageLayout.module.css";

import GlobalHeader from "./GlobalHeader";
import CallToActionButton from "../ui/buttons/CallToActionButton";
import ReviewsSection from "../sections/ReviewsSection";
import GlobalFooter from "./GlobalFooter";

const GlobalPageLayout = (props) => {
  return (
    <div className={styles.globalPageLayout}>
      <GlobalHeader
        logoSrc="/png/logo-placeholder.png"
        callToActionComponent={<CallToActionButton buttonText="Get in Touch" />}
      />
      {props.children}
      <ReviewsSection
        ratingTerm="EXCELLENT"
        ratingAverageNum={4.5}
        maxRatingNum={5}
        reviewNum={135}
        imgSrc="/png/placeholder.jpg"
        imgAlt="The Slick Joinery Logo"
      />
      <GlobalFooter />
    </div>
  );
};

export default GlobalPageLayout;
