import React from "react";
import Head from "next/head";

export const About = () => {
  return (
    <div>
      <Head>
        <title>O nás</title>
      </Head>
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-6">Our Team</h1>
        <div className="flex justify-around flex-wrap ">
          <div className="w-1/3 text-center p-4">
            <img
              src="/images/sloth.jpg"
              alt="Daniel Král"
              className="block mx-auto w-full h-auto rounded-full"
            />
            <h2 className="text-xl font-semibold mt-2">Daniel Král</h2>
            <p className="text-gray-600">Lead Software Engineer</p>
          </div>
          <div className=" w-1/3 text-center p-4">
            <img
              src="/images/wolf.jpg"
              alt="Pavel Havlovič"
              className="block mx-auto w-full h-auto rounded-full"
            />
            <h2 className="text-xl font-semibold mt-2">Pavel Havlovič</h2>
            <p className="text-gray-600">Engineer / Technical support</p>
          </div>
          <div className="text-center p-4 w-1/3 ">
            <img
              src="/images/parrot.jpg"
              alt="Barbora Králová"
              className="block mx-auto w-full h-auto rounded-full"
            />
            <h2 className="text-xl font-semibold mt-2">Barbora Králová</h2>
            <p className="text-gray-600">Chief executive officer</p>
          </div>
        </div>
      </main>
    </div>
  );
};
