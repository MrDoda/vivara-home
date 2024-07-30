import React, { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { Navbar } from "./Navbar"; // Přidáme import pro Navbar
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export const Vivara = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    // await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "#1b2d47",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#14ec05",
            },
            links: {
              color: "#098e00",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="relative z-10 w-full">
        <Navbar />
      </div>
      <div className="relative z-10 p-4 text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">O Vivara</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quam
          omnis ex ab voluptatum porro unde vel ad in expedita, velit
          repudiandae, alias praesentium, laborum voluptas a. Numquam, nemo
          eveniet. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Ipsam asperiores, saepe similique error repudiandae laborum illo
          obcaecati eos rem. Nulla, eius? Explicabo culpa fuga repudiandae
          nesciunt tempora tempore, esse rerum.
        </p>
      </div>
    </div>
  );
};
