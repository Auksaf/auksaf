"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ["home", "collections", "about", "contact"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItem = (id: string, label: string) => (
    <a
      href={`#${id}`}
      className={`uppercase tracking-[0.2em] text-xs transition duration-300 ${
        activeSection === id
          ? "text-[#c6a972]"
          : "text-zinc-300 hover:text-white"
      }`}
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
        <div
          className={`relative flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-500 ${
            scrolled
              ? "border border-white/10 bg-black/70 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.45)]"
              : "border border-white/5 bg-white/[0.03] backdrop-blur-xl"
          }`}
        >
          {/* LEFT */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <Image
              src="/logo.png"
              alt="AUKSAF Logo"
              width={50}
              height={50}
              loading="eager"
              priority
              className="object-contain w-[42px] h-[42px] sm:w-[50px] sm:h-[50px]"
            />

            <div className="min-w-0">
              <h1 className="text-sm sm:text-xl tracking-[0.28em] sm:tracking-[0.35em] font-semibold text-white truncate">
                AUKSAF
              </h1>

              <p className="text-[8px] sm:text-[10px] tracking-[0.25em] text-zinc-400 uppercase mt-1 truncate">
                The Art of Essence
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {navItem("home", "Home")}
            {navItem("collections", "Collections")}
            {navItem("about", "About")}
            {navItem("contact", "Contact")}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle Menu"
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
          >
            <span
              className={`w-6 h-[1px] bg-white transition-all duration-300 ${
                mobileMenu ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />

            <span
              className={`w-6 h-[1px] bg-white transition-all duration-300 ${
                mobileMenu ? "opacity-0" : ""
              }`}
            />

            <span
              className={`w-6 h-[1px] bg-white transition-all duration-300 ${
                mobileMenu ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {mobileMenu && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-[110%] left-0 w-full rounded-2xl border border-[#c6a972]/20 bg-[#0b0b0b]/95 backdrop-blur-2xl p-6 flex flex-col gap-6 md:hidden shadow-[0_10px_60px_rgba(0,0,0,0.55)]"
              >
                <a
                  href="#home"
                  onClick={() => setMobileMenu(false)}
                  className="uppercase tracking-[0.2em] text-sm text-zinc-400 hover:text-[#c6a972]"
                >
                  Home
                </a>

                <a
                  href="#collections"
                  onClick={() => setMobileMenu(false)}
                  className="uppercase tracking-[0.2em] text-sm text-zinc-400 hover:text-[#c6a972]"
                >
                  Collections
                </a>

                <a
                  href="#about"
                  onClick={() => setMobileMenu(false)}
                  className="uppercase tracking-[0.2em] text-sm text-zinc-400 hover:text-[#c6a972]"
                >
                  About
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenu(false)}
                  className="uppercase tracking-[0.2em] text-sm text-zinc-400 hover:text-[#c6a972]"
                >
                  Contact
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}