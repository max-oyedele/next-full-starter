import "src/styles/globals.css";

import React from "react";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import ServiceWorkerWrapper from "src/ServiceWorkerWrapper";
import { store } from "src/redux/store";

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      {/* <ServiceWorkerWrapper /> */}
      <ChakraProvider theme={theme}>
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // console.log(metric); 
}

export default MyApp;
