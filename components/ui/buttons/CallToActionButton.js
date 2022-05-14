import styles from "./CallToActionButton.module.css";

const CallToActionButton = (props) => {
  return (
    <button className={styles["cta-button"]}>
      {props.buttonText}
      {props.buttonIcon}
    </button>
  );
};

export default CallToActionButton;
