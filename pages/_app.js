import "../styles/globals.css";

import GlobalPageLayout from "../components/layout/GlobalPageLayout";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalPageLayout>
      <Component {...pageProps} />
    </GlobalPageLayout>
  );
}

export default MyApp;
