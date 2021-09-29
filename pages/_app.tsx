import "src/styles/globals.css";

import React from "react";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { Provider as ReduxProvider } from "react-redux";

import ServiceWorkerWrapper from "src/ServiceWorkerWrapper";
import { store } from "src/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      {/* <ServiceWorkerWrapper /> */}
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </React.StrictMode>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // console.log(metric); 
}

export default MyApp;
