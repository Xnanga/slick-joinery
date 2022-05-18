import Image from "next/image";

import styles from "./ServiceCard.module.css";

const ServiceCard = (props) => {
  const determineGridPosition = (positionNum) => {
    return styles[`service-card__block--${positionNum}`];
  };

  return (
    <div
      className={`${styles["service-card"]} ${determineGridPosition(
        props.positionNum
      )}`}
    >
      <Image
        className={styles["service-card__block__img"]}
        src={props.imgSrc}
        alt={props.imgAlt}
        height={props.imgHeight}
        width={props.imgWidth}
      />
      <div className={styles["service-card__block__text"]}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
