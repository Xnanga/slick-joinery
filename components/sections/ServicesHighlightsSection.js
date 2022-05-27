import styles from "./ServicesHighlightsSection.module.css";

import ServiceCard from "../ui/cards/ServiceCard";

const ServicesHighlightSection = (props) => {
  return (
    <section className={styles["services-section"]}>
      <h2>{props.title}</h2>
      <div className={styles["services-grid"]}>
        <ServiceCard
          positionNum="1"
          imgSrc={"/png/hammer-icon.png"}
          imgAlt={"TEST"}
          imgHeight={75}
          imgWidth={75}
          title="Joinery"
          description="This is the description of the service we provide."
        />
        <ServiceCard
          positionNum="2"
          imgSrc={"/png/home-1-icon.png"}
          imgAlt={"TEST"}
          imgHeight={75}
          imgWidth={75}
          title="Building Work"
          description="This is the description of the service we provide."
        />
        <ServiceCard
          positionNum="3"
          imgSrc={"/png/home-2-icon.png"}
          imgAlt={"TEST"}
          imgHeight={75}
          imgWidth={75}
          title="Loft Conversions"
          description="This is the description of the service we provide."
        />
        <ServiceCard
          positionNum="4"
          imgSrc={"/png/conservatory-icon.png"}
          imgAlt={"TEST"}
          imgHeight={75}
          imgWidth={75}
          title="Conservatories"
          description="This is the description of the service we provide."
        />
        <ServiceCard
          positionNum="5"
          imgSrc={"/png/house-extension-icon.png"}
          imgAlt={"TEST"}
          imgHeight={75}
          imgWidth={75}
          title="Extensions"
          description="This is the description of the service we provide."
        />
      </div>
    </section>
  );
};

export default ServicesHighlightSection;
