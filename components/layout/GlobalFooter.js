import styles from "./GlobalFooter.module.css";

import Image from "next/image";

const GlobalFooter = (props) => {
  return (
    <footer className={styles.footer}>
      <div
        className={`${styles["footer-column"]} ${styles["footer-column--1"]}`}
      >
        <Image
          src="/png/logo-placeholder.png"
          alt="The Slick Joinery Logo"
          width={200}
          height={150}
        />
      </div>
      <div
        className={`${styles["footer-column"]} ${styles["footer-column--2"]}`}
      >
        <h3>Services</h3>
        <ul className={styles["footer-column__list"]}>
          <li>Joinery Work</li>
          <li>Building Work</li>
          <li>Loft Conversions</li>
          <li>Conservatories</li>
          <li>Extensions</li>
        </ul>
      </div>
      <div
        className={`${styles["footer-column"]} ${styles["footer-column--3"]}`}
      >
        <h3>Find Us</h3>
        <ul className={styles["footer-column__list"]}>
          <li>123 Gravel Road,</li>
          <li>Springburn</li>
          <li>Glasgow</li>
          <li>G21 4DP</li>
        </ul>
      </div>
      <div
        className={`${styles["footer-column"]} ${styles["footer-column--4"]}`}
      >
        <h3>Connect with Us</h3>
        <ul className={styles["footer-column__list"]}>
          <li>RatedPeople</li>
          <li>TrustATrader</li>
          <li>Facebook</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div className={styles["footer-bar"]}>
        <span className={styles["footer-bar__text"]}>
          © Slick Joinery | 2022
        </span>
      </div>
    </footer>
  );
};

export default GlobalFooter;
