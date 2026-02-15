import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import { FaArrowRight } from "react-icons/fa6";

import starImage from "../assets/projects/ProjectS-TaR.png";

const techUrls: Record<string, string> = {
  React: "https://react.dev/",
  TypeScript: "https://www.typescriptlang.org/",
  Tailwind: "https://tailwindcss.com/",
  "D3.js": "https://d3js.org/",
  "React Native": "https://reactnative.dev/",
  Redux: "https://redux.js.org/",
  "Node.js": "https://nodejs.org/",
  MongoDB: "https://www.mongodb.com/",
  "Three.js": "https://threejs.org/",
  "React Three Fiber": "https://docs.pmnd.rs/react-three-fiber",
  GSAP: "https://gsap.com/",
  Blender: "https://www.blender.org/",
};

const projects = [
  {
    id: 1,
    title: "Cyber Security Dashboard",
    description:
      "Kompleksowy panel administracyjny do monitorowania zagrożeń w czasie rzeczywistym. Zaprojektowany z naciskiem na czytelność danych i szybką reakcję na incydenty. Pełna integracja z API i systemem powiadomień.",
    stack: ["React", "TypeScript", "Tailwind", "D3.js"],
    image: starImage,
    link: "#",
  },
  {
    id: 2,
    title: "E-Commerce Mobile App",
    description:
      "Aplikacja mobilna dla branży modowej z wykorzystaniem React Native. Obsługa płatności Stripe, animowane przejścia między ekranami i tryb offline. Skupienie na User Experience i płynności działania (60fps).",
    stack: ["React Native", "Redux", "Node.js", "MongoDB"],
    image: starImage,
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio 3D Experience",
    description:
      "Eksperymentalna strona wizytówka wykorzystująca Three.js i WebGL. Interaktywne środowisko 3D, w którym użytkownik może eksplorować projekty w przestrzeni wirtualnej. Optymalizacja pod słabsze urządzenia.",
    stack: ["Three.js", "React Three Fiber", "GSAP", "Blender"],
    image: starImage,
    link: "#",
  },
];

export function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const currentProject = projects[currentIndex];

  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="text-white flex flex-col justify-center py-20 px-6 relative overflow-hidden">
      {/* NAGŁÓWEK SEKCJI */}
      <div className="max-w-7xl mx-auto w-full mb-12 text-center">
        <h2 className="text-5xl md:text-8xl newsreader-bold-italic mb-2">
          Selected Works
        </h2>
      </div>

      {/* GŁÓWNY KONTENER GRID */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* --- KOLUMNA Z OBRAZKIEM --- */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg lg:order-2">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentProject.id}
              src={currentProject.image}
              alt={currentProject.title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="object-cover w-full h-full"
            />
          </AnimatePresence>
        </div>

        {/* --- KOLUMNA Z TREŚCIĄ --- */}
        <div className="flex flex-col justify-between h-full min-h-100 lg:order-1">
          <div className="flex flex-col gap-6">
            {/* 1. LICZNIK */}
            <div className="font-mono text-sm flex items-center">
              <div className="relative h-5 w-4 overflow-hidden text-[#00FF00]">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={currentIndex}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    0{currentIndex + 1}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-white mx-1">/</span>
              <span className="text-[#00FF00]">0{projects.length}</span>
            </div>

            {/* 2. TEKSTY */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-6"
              >
                {/* Tytuł */}
                <motion.h3
                  variants={textItemVariants}
                  className="text-4xl md:text-5xl font-bold font-mono leading-tight"
                >
                  {currentProject.title}
                </motion.h3>

                {/* Tech Stack */}
                <motion.div
                  variants={textItemVariants}
                  className="flex flex-wrap gap-3"
                >
                  {currentProject.stack.map((tech) => (
                    <a
                      key={tech}
                      href={techUrls[tech] || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-block cursor-pointer rounded-full bg-[#00FF00] text-xs font-mono font-bold uppercase tracking-wider text-[#00FF00] no-underline"
                      title={`Open ${tech} documentation`}
                    >
                      <span className="block rounded-full border border-[#00FF00] bg-black px-3 py-1 transition-transform duration-100 ease-out will-change-transform group-hover:translate-y-[-2px] group-active:translate-y-0">
                        {tech}
                      </span>
                    </a>
                  ))}
                </motion.div>

                {/* Opis */}
                <motion.p
                  variants={textItemVariants}
                  className="text-gray-300 text-lg leading-relaxed font-sans max-w-md"
                >
                  {currentProject.description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3. PRZYCISK NAVIGATION (Z REACT ICON) */}
          <div className="flex justify-end mt-10">
            <button
              onClick={nextProject}
              className="group relative inline-block focus:outline-none cursor-pointer"
            >
              <span
                className="absolute inset-0 rounded-lg bg-[#00FF00] transition-transform duration-300 ease-out 
      translate-x-1 translate-y-1 
      group-hover:translate-x-1.5 group-hover:translate-y-1.5 
      group-active:translate-x-0 group-active:translate-y-0"
              ></span>

              <span
                className="relative flex items-center gap-4 rounded-lg border-2 border-[#00FF00] bg-black px-8 py-4 uppercase tracking-widest text-white transition-all duration-300 ease-out 
      group-active:translate-x-1 group-active:translate-y-1"
              >
                <span className="font-mono font-bold transition-colors duration-300 group-hover:text-[#00FF00]">
                  Next Project
                </span>

                <FaArrowRight
                  className="h-5 w-5 text-white transition-all duration-300 ease-out 
        group-hover:translate-x-1 group-hover:text-[#00FF00]"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
