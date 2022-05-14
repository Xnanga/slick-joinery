import styles from "./GlobalHeader.module.css";

import Image from "next/image";
import Link from "next/link";

const GlobalHeader = (props) => {
  return (
    <header className={styles["global-header"]}>
      <div className={styles["global-header__logo-container"]}>
        <Link href="/">
          <Image
            className={styles["global-header__logo-img"]}
            src={props.logoSrc}
            alt={props.logoAlt}
            height={125}
            width={175}
          />
        </Link>
      </div>
      <nav className={styles["global-header__navigation"]}>
        <ul className={styles["global-header__navigation-list"]}>
          <li className={styles["global-header__navigation-list-item"]}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles["global-header__navigation-list-item"]}>
            <Link href="/services">Services</Link>
          </li>
          <li className={styles["global-header__navigation-list-item"]}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles["global-header__navigation-list-item"]}>
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li className={styles["global-header__navigation-list-item"]}>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <div className={styles["global-header__cta"]}>
        {props.callToActionComponent}
      </div>
    </header>
  );
};

export default GlobalHeader;
