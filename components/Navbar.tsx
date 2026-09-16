"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isBlogPage =
    pathname.startsWith("/articles") || pathname.startsWith("/categories");

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (id: string, label: string) => (
    <a
      href={isHomePage ? `#${id}` : `/#${id}`}
      className={`uppercase tracking-[0.15em] text-xs transition duration-300 whitespace-nowrap ${
        activeSection === id
          ? "text-[#c6a972]"
          : "text-zinc-300 hover:text-white"
      }`}
    >
      {label}
    </a>
  );

  return (
    <header
      dir="ltr"
      style={{
        direction: "ltr",
        unicodeBidi: "isolate",
      }}
      className="fixed top-0 left-0 z-[100] w-full overflow-x-visible text-left"
    >
      <div className="mx-auto max-w-7xl px-3 py-3 sm:px-6 sm:py-4">
        {/* WRAPPER */}
        <div
          className={`relative flex items-center justify-between overflow-visible rounded-2xl px-3 py-3 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "border border-white/10 bg-black/70 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.45)]"
              : "border border-white/5 bg-white/[0.03] backdrop-blur-xl"
          }`}
        >
          {/* LEFT */}
          <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-4">
            <Image
              src="/logo.png"
              alt="AUKSAF Logo"
              width={50}
              height={50}
              loading="eager"
              priority
              className="h-[38px] w-[38px] flex-shrink-0 object-contain sm:h-[50px] sm:w-[50px]"
            />

            <div className="min-w-0 overflow-hidden">
              <h1 className="truncate text-sm font-semibold tracking-[0.18em] text-white sm:text-xl sm:tracking-[0.35em]">
                AUKSAF
              </h1>

              <p className="mt-1 truncate text-[8px] uppercase tracking-[0.2em] text-zinc-400 sm:text-[10px]">
                The Art of Essence
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden flex-shrink-0 items-center gap-8 md:flex lg:gap-10">
            {navItem("home", "Home")}
            {navItem("collections", "Collections")}
            {navItem("about", "About")}

            <a
              href="/articles/en"
              className={`whitespace-nowrap text-xs uppercase tracking-[0.15em] transition duration-300 ${
                isBlogPage
                  ? "text-[#c6a972]"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              Blog
            </a>

            {navItem("contact", "Contact")}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle Menu"
            className="relative z-[10000] flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-[1px] w-6 bg-white transition-all duration-300 ${
                mobileMenu ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-[1px] w-6 bg-white transition-all duration-300 ${
                mobileMenu ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-[1px] w-6 bg-white transition-all duration-300 ${
                mobileMenu ? "-translate-y-[7px] -rotate-45" : ""
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
                className="absolute left-0 top-full z-[9999] mt-2 flex w-full flex-col gap-6 rounded-2xl border border-[#c6a972]/20 bg-[#0b0b0b]/95 p-6 text-left shadow-[0_10px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:hidden"
              >
                {["home", "collections", "about", "contact"].map((id) => (
                  <a
                    key={id}
                    href={isHomePage ? `#${id}` : `/#${id}`}
                    onClick={() => setMobileMenu(false)}
                    className="text-left text-sm uppercase tracking-[0.2em] text-zinc-400 hover:text-[#c6a972]"
                  >
                    {id}
                  </a>
                ))}

                <a
                  href="/articles/en"
                  onClick={() => setMobileMenu(false)}
                  className={`text-left text-sm uppercase tracking-[0.2em] ${
                    isBlogPage
                      ? "text-[#c6a972]"
                      : "text-zinc-400 hover:text-[#c6a972]"
                  }`}
                >
                  Blog
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}