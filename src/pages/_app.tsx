import type { AppProps } from "next/app";
import "../styles/globals.css";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
}
