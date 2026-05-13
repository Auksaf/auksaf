import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-white/10 mt-24 md:mt-40"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

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
              Crafted through atmosphere, elegance, and emotional identity —
              modern fragrances designed to leave a lasting presence.
            </p>

          </div>

          {/* NAV */}
          <div>
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-xs mb-6">
              Navigation
            </p>

            <div className="flex flex-col gap-4 text-sm md:text-base">
              {["home", "collections", "about", "contact"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-zinc-300 hover:text-[#c6a972] transition"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT + SOCIAL */}
          <div>
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-xs mb-6">
              Connect
            </p>

            <div className="space-y-4 text-zinc-300 text-sm">

              <p className="break-all">auksafofficial@gmail.com</p>
              <p>Pakistan</p>

              {/* SOCIAL BUTTONS */}
              <div className="pt-4 flex flex-col gap-3">

                <a
                  href="https://instagram.com/YOUR_USERNAME"
                  target="_blank"
                  className="hover:text-pink-400 transition"
                >
                  📸 Instagram
                </a>

                <a
                  href="https://tiktok.com/@YOUR_USERNAME"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  🎵 TikTok
                </a>

                <a
                  href="https://facebook.com/YOUR_PAGE"
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  📘 Facebook
                </a>

              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/5 mt-16 pt-6 flex flex-col md:flex-row justify-between text-center md:text-left gap-4">

          <p className="text-zinc-600 text-sm">
            © 2026 AUKSAF
          </p>

          <p className="text-zinc-700 text-xs uppercase tracking-[0.3em]">
            Modern Luxury Fragrance House
          </p>

        </div>

      </div>
    </footer>
  );
}