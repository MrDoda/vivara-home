import React from "react";
import Head from "next/head";
import { ClientSection } from "../components/ClientSection";
import { About } from "../components/about";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moje Statická Stránka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Fuck my life</h1>
        <div id="ClientSection" className="w-full">
          <h1 className="text-4xl font-bold mb-6 text-center">Our Clients</h1>
          <ClientSection />
        </div>
        <div id="About" className="w-full">
          <About />
        </div>
      </main>

      {/* Footer */}
    </div>
  );
}
