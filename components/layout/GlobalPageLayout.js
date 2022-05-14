import styles from "./GlobalPageLayout.module.css";

import GlobalHeader from "./GlobalHeader";
import CallToActionButton from "../ui/buttons/CallToActionButton";

const GlobalPageLayout = (props) => {
  return (
    <div className={styles.globalPageLayout}>
      <GlobalHeader
        logoSrc="/png/logo-placeholder.png"
        callToActionComponent={<CallToActionButton buttonText="Get in Touch" />}
      />
      {props.children}
    </div>
  );
};

export default GlobalPageLayout;
