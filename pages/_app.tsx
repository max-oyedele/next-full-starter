import "src/styles/globals.css";

import ServiceWorkerWrapper from "src/ServiceWorkerWrapper";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      {/* <ServiceWorkerWrapper /> */}
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default MyApp;
