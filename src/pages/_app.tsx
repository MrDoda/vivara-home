import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
}
