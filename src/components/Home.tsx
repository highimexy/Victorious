import { useState } from "react";

export function Home() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center relative">
      <div className="max-w-120 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white font-mono">
          Let's write some code
        </h1>
      </div>

      <div className="relative my-8">
        <img
          src="/BgFreeHome.png"
          alt="Home"
          className="w-full max-w-240 h-auto"
        />

        {/* --- HOTSPOT NR 1 (Lewa strona) --- */}
        <div
          className="absolute top-[40%] right-[78%] w-[13%] h-[18%] cursor-pointer"
          onMouseEnter={() => setActiveTooltip(1)}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          {activeTooltip === 1 && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-black border border-[#00FF00] p-4 rounded-md shadow-xl flex flex-col items-center z-50">
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#00FF00]"></div>

              {/* Treść pierwszego */}
              <img
                src="/jakis-obrazek-1.png"
                alt="Miniatura"
                className="w-full h-24 mb-2 object-cover rounded"
              />
              <span className="text-[#00FF00] font-mono text-sm text-center">
                Lewy element <br />
                <span className="underline cursor-pointer">Szczegóły</span>
              </span>
            </div>
          )}
        </div>

        {/* --- HOTSPOT NR 2 (Prawa strona) --- */}
        <div
          className="absolute top-[45%] left-[78%] w-[15%] h-[18%] cursor-pointer "
          onMouseEnter={() => setActiveTooltip(2)}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          {activeTooltip === 2 && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-black border border-[#00FF00] p-4 rounded-md shadow-xl flex flex-col items-center z-50">
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#00FF00]"></div>

              {/* Treść drugiego */}
              <img
                src="/jakis-obrazek-2.png"
                alt="Miniatura"
                className="w-full h-24 mb-2 object-cover rounded"
              />
              <span className="text-[#00FF00] font-mono text-sm text-center">
                Prawy element <br />
                <span className="underline cursor-pointer">Szczegóły</span>
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-2xl text-center px-6">
        <p className="text-xl md:text-2xl text-gray-300 font-mono">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </section>
  );
}
