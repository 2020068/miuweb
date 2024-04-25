/** @format */

import "./globals.css";
import "./applycs.css";
import "./about/about.css";
import "./about/employee/employee.css";
import "/components/carousel/embla.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
