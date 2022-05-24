import styles from "./GlobalFooter.module.css";

import Image from "next/image";
import Link from "next/link";

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
          <li>
            <Link href="#">Joinery Work</Link>
          </li>
          <li>
            <Link href="#">Building Work</Link>
          </li>
          <li>
            <Link href="#">Loft Conversions</Link>
          </li>
          <li>
            <Link href="#">Conservatories</Link>
          </li>
          <li>
            <Link href="#">Extensions</Link>
          </li>
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
          <li>
            <a href="#">RatedPeople</a>
          </li>
          <li>
            <a href="#">TrustATrader</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div className={styles["footer-bar"]}>
        <span className={styles["footer-bar__text"]}>
          © Slick Joinery | 2022
        </span>
        <div className={styles["footer-bar__icon-container"]}>
          <a href="#">
            <Image
              src="/png/facebook-icon.png"
              alt="The Slick Joinery Logo"
              width={25}
              height={25}
            />
          </a>
          <a href="#">
            <Image
              src="/png/twitter-icon.png"
              alt="The Slick Joinery Logo"
              width={25}
              height={25}
            />
          </a>
          <a href="#">
            <Image
              src="/png/instagram-icon.png"
              alt="The Slick Joinery Logo"
              width={25}
              height={25}
            />
          </a>
          <a href="#">
            <Image
              src="/png/linkedin-icon.png"
              alt="The Slick Joinery Logo"
              width={25}
              height={25}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
