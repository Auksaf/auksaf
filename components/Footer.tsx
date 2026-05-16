import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-white/10 mt-24 md:mt-40 bg-black/60 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-16">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-4 mb-6">

              <Image
                src="/logo.png"
                alt="AUKSAF Logo"
                width={60}
                height={60}
                className="object-contain"
              />

              <div>

                <h2 className="text-xl md:text-2xl tracking-[0.35em] font-semibold">
                  AUKSAF
                </h2>

                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-zinc-500 mt-1">
                  The Art of Essence
                </p>

              </div>

            </div>

            <p className="text-zinc-500 leading-relaxed max-w-sm text-sm md:text-base">
              Crafted through atmosphere, elegance, and emotional identity.
              Modern fragrances designed to leave a lasting presence.
            </p>

          </div>

          {/* NAVIGATION */}
          <div>

            <p className="uppercase tracking-[0.3em] text-zinc-500 text-[10px] md:text-xs mb-6 md:mb-8">
              Navigation
            </p>

            <div className="flex flex-col gap-4 md:gap-5 text-sm md:text-base">

              <a
                href="#home"
                className="text-zinc-300 hover:text-white transition duration-300 w-fit"
              >
                Home
              </a>

              <a
                href="#collections"
                className="text-zinc-300 hover:text-white transition duration-300 w-fit"
              >
                Collections
              </a>

              <a
                href="#about"
                className="text-zinc-300 hover:text-white transition duration-300 w-fit"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-zinc-300 hover:text-white transition duration-300 w-fit"
              >
                Contact
              </a>

            </div>

          </div>

          {/* CONTACT + SOCIALS */}
          <div>

            <p className="uppercase tracking-[0.3em] text-zinc-500 text-[10px] md:text-xs mb-6 md:mb-8">
              Contact
            </p>

            <div className="space-y-5 text-zinc-300 text-sm md:text-base">

              <p className="break-all">
                auksafofficial@gmail.com
              </p>

              <p>Pakistan</p>

              {/* SOCIALS */}
              <div className="pt-4">

                <p className="uppercase tracking-[0.3em] text-zinc-500 text-[10px] md:text-xs mb-5">
                  Follow Us
                </p>

                <div className="flex flex-col gap-4 text-sm md:text-base">

                  <a
                    href="https://instagram.com/auksaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-white transition duration-300 w-fit"
                  >
                    Instagram
                  </a>

                  <a
                    href="https://tiktok.com/@auksaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-white transition duration-300 w-fit"
                  >
                    TikTok
                  </a>

                  <a
                    href="https://facebook.com/auksaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-white transition duration-300 w-fit"
                  >
                    Facebook
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 mt-20 md:mt-24 pt-8 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">

          <p className="text-zinc-600 text-xs md:text-sm">
            © 2026 AUKSAF. All rights reserved.
          </p>

          <p className="text-zinc-700 text-[10px] md:text-xs uppercase tracking-[0.3em]">
            Modern Luxury Fragrance House
          </p>

        </div>

      </div>
    </footer>
  );
}