import styles from "./GoogleMapWidget.module.css";

// Library I want to use doesn't support React v18.0 yet...
// https://www.npmjs.com/package/google-map-react

const GoogleMapWidget = () => {
  return <div id="google-map" className={styles["google-map"]}></div>;
};

export default GoogleMapWidget;
