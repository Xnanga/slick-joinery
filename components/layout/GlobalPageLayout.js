import styles from "./GlobalPageLayout.module.css";

import GlobalHeader from "./GlobalHeader";
import CallToActionButton from "../ui/buttons/CallToActionButton";
import GlobalFooter from "./GlobalFooter";

const GlobalPageLayout = (props) => {
  return (
    <div className={styles.globalPageLayout}>
      <GlobalHeader
        logoSrc="/png/logo-placeholder.png"
        callToActionComponent={<CallToActionButton buttonText="Get in Touch" />}
      />
      {props.children}
      <GlobalFooter />
    </div>
  );
};

export default GlobalPageLayout;
