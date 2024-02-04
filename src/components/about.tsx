import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>O nás</title>
      </Head>
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-6">Náš tým</h1>
        {/* Zde bude obsah stránky O nás */}
      </main>
    </div>
  );
};

export default About;
