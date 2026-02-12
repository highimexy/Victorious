import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "Works", link: "#works" },
  { name: "About me", link: "#about" },
  { name: "Contact", link: "#contact" },
];

export function Navigation() {
  const [activeTab, setActiveTab] = useState(navItems[0].name);

  return (
    <div
      className={`
        fixed z-50
        top-8 left-0 w-full px-3
        md:bottom-auto md:translate-x-0 md:top-8 md:left-8
        md:w-auto md:px-0
      `}
    >
      <nav
        className={`
          p-2 rounded-2xl border border-white/10 bg-black/10 backdrop-blur-md shadow-lg
          flex gap-2
          flex-row items-center w-full justify-between
          md:flex-col md:items-stretch md:w-auto
        `}
      >
        {navItems.map((item) => {
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setActiveTab(item.name)}
              className={`
                relative px-4 py-2 text-sm font-medium transition-colors duration-200 text-center rounded-xl
                ${
                  isActive
                    ? "text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900"
                }
              `}
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 bg-black dark:bg-white rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <span className="relative z-10 mix-blend-exclusion">
                {item.name}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
