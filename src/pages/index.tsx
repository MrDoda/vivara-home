import React from "react";
import Head from "next/head";
import { ClientSection } from "../components/ClientSection";
import { About } from "../components/About";
import { Vivara } from "@/components/Vivara";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moje Statická Stránka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full ">
        <main className="relative flex flex-col items-center z-10">
          <Vivara />
          <div id="clientsection" className="w-full">
            <h1 className="text-4xl font-bold mb-6 text-center text-black">
              Our Clients
            </h1>
            <ClientSection />
          </div>
          <div id="about" className="w-full">
            <About />
          </div>
        </main>
      </div>

      {/* Footer */}
    </div>
  );
}
