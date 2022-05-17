import styles from "./VideoSection.module.css";
import CallToActionButton from "../ui/buttons/CallToActionButton";

const VideoSection = (props) => {
  return (
    <section className={styles["video-section"]}>
      {props.titleText && (
        <div className={styles["video-section__content"]}>
          <h1>{props.titleText}</h1>
          <span>{props.taglineText}</span>
          {props.buttonText && (
            <CallToActionButton buttonText={props.buttonText} />
          )}
        </div>
      )}
      <video className={styles["video-player"]} autoPlay loop muted>
        <source src={props.videoSrc} type="video/webm" />
      </video>
    </section>
  );
};

export default VideoSection;
