import "src/styles/globals.css";

import React from "react";
import type { AppProps, NextWebVitalsMetric } from 'next/app'

import ServiceWorkerWrapper from "src/ServiceWorkerWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ServiceWorkerWrapper />
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default MyApp;