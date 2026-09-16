import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      dir="ltr"
      style={{
        direction: "ltr",
        unicodeBidi: "isolate",
      }}
      className="relative z-10 mt-20 border-t border-white/10 bg-transparent text-left md:mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* BRAND */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="AUKSAF Logo"
                width={60}
                height={60}
                className="object-contain"
              />

              <div>
                <h2 className="text-xl font-semibold tracking-[0.35em] md:text-2xl">
                  AUKSAF
                </h2>

                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-zinc-500 md:text-xs">
                  The Art of Essence
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-zinc-500">
              Crafted through atmosphere, elegance, and emotional identity.
              Modern fragrances designed to leave a lasting presence.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-zinc-500 md:text-xs">
              Explore
            </p>

            <nav className="flex flex-col gap-3.5 text-sm md:text-base">
              <a
                href="#home"
                className="w-fit text-zinc-300 transition duration-300 hover:text-white"
              >
                Home
              </a>

              <a
                href="#collections"
                className="w-fit text-zinc-300 transition duration-300 hover:text-white"
              >
                Collections
              </a>

              <a
                href="#about"
                className="w-fit text-zinc-300 transition duration-300 hover:text-white"
              >
                About
              </a>

              <Link
                href="/articles/en"
                className="w-fit text-zinc-300 transition duration-300 hover:text-white"
              >
                Blog
              </Link>

              <a
                href="#contact"
                className="w-fit text-zinc-300 transition duration-300 hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* CONNECT */}
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-zinc-500 md:text-xs">
              Connect
            </p>

            <div className="flex flex-col gap-3.5 text-sm md:text-base">
              <a
                href="mailto:auksafofficial@gmail.com"
                className="w-fit break-all text-zinc-300 transition duration-300 hover:text-white"
              >
                auksafofficial@gmail.com
              </a>

              <p className="text-zinc-300">Pakistan</p>

              <a
                href={`https://wa.me/923024255245?text=${encodeURIComponent(
                  "Hi, I want to confirm my ROOH order."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center rounded-md bg-[#25D366] px-4 py-2 text-sm text-white transition hover:opacity-90"
              >
                WhatsApp
              </a>

              <p className="-mt-1 text-xs text-zinc-500">
                For order confirmation & support
              </p>

              <div className="mt-2 flex flex-col gap-3.5">
                <a
                  href="https://instagram.com/auksaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-zinc-300 transition duration-300 hover:text-white"
                >
                  Instagram
                </a>

                <a
                  href="https://tiktok.com/@auksaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-zinc-300 transition duration-300 hover:text-white"
                >
                  TikTok
                </a>

                <a
                  href="https://facebook.com/auksaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-zinc-300 transition duration-300 hover:text-white"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* POLICIES */}
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-zinc-500 md:text-xs">
              Policies
            </p>

            <nav className="flex flex-col gap-3.5 text-sm md:text-base">
              <Link
                href="/terms"
                className="w-fit text-zinc-300 transition duration-300 hover:text-white"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/return-policy"
                className="w-fit text-zinc-300 transition duration-300 hover:text-white"
              >
                Return Policy
              </Link>

              <Link
                href="/privacy-policy"
                className="w-fit text-zinc-300 transition duration-300 hover:text-white"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-7 text-center md:mt-14 md:flex-row md:text-left">
          <p className="text-xs text-zinc-600 md:text-sm">
            © 2026 AUKSAF. All rights reserved.
          </p>

          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-700 md:text-xs">
            Modern Luxury Fragrance House
          </p>
        </div>
      </div>
    </footer>
  );
}