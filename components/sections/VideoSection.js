import styles from "./VideoSection.module.css";

const VideoSection = (props) => {
  return (
    <section className={styles["video-section"]}>
      <video className={styles["video-player"]} autoPlay loop muted>
        <source src={props.videoSrc} type="video/webm" />
      </video>
    </section>
  );
};

export default VideoSection;
