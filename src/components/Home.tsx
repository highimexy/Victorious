import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import HomeBg from "../assets/home/BgFreeHomeFix.png";
import Linus from "../assets/home/Linus.webp";
import Ken from "../assets/home/Ken.webp";

export function Home() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const text = "Let's architect your vision";

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const sentenceVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center relative">
      {/* --- TYTUŁ (TYPEWRITER) --- */}
      <div className="max-w-160 text-center px-4 mb-1">
        <motion.h1
          className="text-6xl md:text-8xl text-white newsreader-bold-italic leading-tight"
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* --- OBRAZEK --- */}
      <motion.div
        className="relative"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={HomeBg} alt="Home" className="w-full max-w-260 h-auto" />

        {/* --- HOTSPOT NR 1 --- */}
        <div
          className="absolute top-[40%] right-[78%] w-[13%] h-[18%] cursor-pointer"
          onMouseEnter={() => setActiveTooltip(1)}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          <AnimatePresence>
            {activeTooltip === 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-black border border-[#00FF00] p-4 rounded-md shadow-xl flex flex-col items-center z-50"
              >
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#00FF00]"></div>
                <img
                  src={Linus}
                  alt="Linux"
                  className="w-full h-42 mb-2 object-cover rounded"
                />
                <span className="text-[#00FF00] font-mono text-xl text-center flex">
                  LinusTorvalds <br />
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- HOTSPOT NR 2 --- */}
        <div
          className="absolute top-[45%] left-[78%] w-[15%] h-[18%] cursor-pointer "
          onMouseEnter={() => setActiveTooltip(2)}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          <AnimatePresence>
            {activeTooltip === 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-black border border-[#00FF00] p-4 rounded-md shadow-xl flex flex-col items-center z-50"
              >
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#00FF00]"></div>
                <img
                  src={Ken}
                  alt="Go"
                  className="w-full h-42 mb-2 object-cover rounded"
                />
                <span className="text-[#00FF00] font-mono text-xl flex gap-2">
                  KenThompson <br />
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* --- DOLNY TEKST --- */}
      <motion.div
        className="max-w-7xl text-center px-4 mt-8"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="text-xl md:text-5xl text-gray-300 newsreader-bold-italic leading-tight">
          Wiktor Kowalczyk. Architektura kompletna. <br />
          {/* Jasny Zielony - Pulsowanie 1 */}
          <motion.span
            className="text-[#00FF00]"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Projektuję systemy.{" "}
          </motion.span>
          {/* Ciemniejszy Zielony - Pulsowanie 2 (z lekkim przesunięciem fazy) */}
          <motion.span
            className="text-green-700"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            Wdrażam rozwiązania.
          </motion.span>
          <br />
          Od wizji do skalowalnej produkcji.
        </p>
      </motion.div>
    </section>
  );
}
