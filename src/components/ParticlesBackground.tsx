import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadTextShape } from "@tsparticles/shape-text"; // <--- 1. IMPORTUJEMY TO
import type { ISourceOptions } from "@tsparticles/engine";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Ładujemy podstawowy silnik
      await loadSlim(engine);
      // Ładujemy obsługę tekstu/znaków ASCII
      await loadTextShape(engine); // <--- 2. ŁADUJEMY TO
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,

      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        color: { value: "#00FF00" },
        move: {
          direction: "bottom",
          enable: true,
          speed: 2, // Zwiększyłem lekko prędkość testowo
          straight: false, // Lekkie odchylenia wyglądają naturalniej
        },
        number: {
          value: 40,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "text", // <--- 3. ZMIANA Z "char" NA "text"
          options: {
            text: {
              // <--- 4. TUTAJ TEŻ KLUCZ "text"
              value: ["0", "1", "{", "}", "</>", "404"],
              font: "monospace",
              style: "",
              weight: "400",
            },
          },
        },
        size: {
          value: { min: 10, max: 20 }, // Różne wielkości znaków
        },
      },
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return null;
};
