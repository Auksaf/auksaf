import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";
import MouseGlow from "../components/MouseGlow";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import ProductGrid from "../components/ProductGrid";
import BrandManifesto from "../components/BrandManifesto";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-x-hidden bg-black text-white">

        {/* Effects */}
        <div className="hidden md:block">
          <MouseGlow />
        </div>

        <SmoothScroll />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.10),transparent_45%)]" />
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-[#c6a972]/10 blur-3xl rounded-full" />

        {/* ================= HERO (FIXED DESKTOP SPLIT LAYOUT) ================= */}
        <section
          id="home"
          className="relative w-full min-h-screen flex items-center px-6 pt-20 sm:pt-24"
        >
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

            {/* LEFT SIDE (TEXT) */}
            <div className="flex-1 text-center lg:text-left">

              <p className="text-zinc-400 tracking-[0.25em] text-xs sm:text-sm uppercase">
                A Modern Fragrance House
              </p>

              <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[0.15em] text-white">
                AUKSAF
              </h1>

              <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Crafted through elegance, depth, and identity — fragrances designed to leave presence behind.
              </p>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/order"
                  className="px-6 py-3 bg-[#c6a972] text-black uppercase tracking-widest text-xs sm:text-sm"
                >
                  Order ROOH
                </a>

                <a
                  href="#collections"
                  className="px-6 py-3 border border-white/20 text-white uppercase tracking-widest text-xs sm:text-sm"
                >
                  Explore Fragrances
                </a>
              </div>

            </div>

            {/* RIGHT SIDE (IMAGE) */}
            <div className="flex-1 flex justify-center lg:justify-end">

              <div className="relative w-[280px] sm:w-[360px] md:w-[480px] lg:w-[600px] h-[360px] sm:h-[460px] md:h-[650px]">

                <Image
                  src="/perfumes/rooh.png"
                  alt="ROOH Perfume"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 80vw, 520px"
                />

              </div>

            </div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}
<section
  id="about"
  className="relative z-10 py-28 px-6 border-t border-white/5 bg-zinc-950/40"
>
  <Reveal>
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm mb-6">
          The Philosophy
        </p>

        <h2 className="text-4xl md:text-6xl">
          Fragrance Is More Than Scent, It Is Presence.
        </h2>
      </div>

      <div className="text-zinc-400 leading-relaxed">
        AUKSAF is built around identity, elegance, and emotional depth.
        Every fragrance is designed to leave a lasting impression.
      </div>

    </div>
  </Reveal>
</section>

        {/* ================= COLLECTION ================= */}
        <section
          id="collections"
          className="relative z-10 py-40 px-6 border-t border-white/5"
        >
          <Reveal>

            <div className="text-center mb-20">
              <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
                The ROOH Collection
              </p>

              <h2 className="text-6xl md:text-7xl font-light tracking-[0.2em] mt-4">
                Signature Variants
              </h2>

              <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
                A cinematic fragrance universe crafted through atmosphere, elegance, identity, and emotional presence.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[420px] md:h-[520px]">

                <Image
                  src="/perfumes/banner.png"
                  alt="ROOH Variant"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80vw, 420px"
                />

              </div>
            </div>

            <div className="mt-14 flex justify-center">
              <a
                href="/rooh"
                className="px-8 py-4 border border-[#c6a972]/30 uppercase tracking-widest text-sm hover:bg-[#c6a972] hover:text-black transition"
              >
                View Product Details
              </a>
            </div>

          </Reveal>
        </section>

        {/* ================= PRICING ================= */}
        <section className="relative z-10 py-28 px-6 border-t border-white/5 bg-zinc-950/30">
          <div className="max-w-4xl mx-auto text-center">

            <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm mb-6">
              Launch Edition
            </p>

            <h2 className="text-5xl md:text-6xl tracking-[0.2em]">
              ROOH — 50ML
            </h2>

            <div className="mt-10">
              <p className="text-zinc-500 line-through text-xl">Rs. 2999</p>
              <p className="text-5xl md:text-6xl">Rs. 2499</p>
            </div>

            <a
              href="/order"
              className="inline-block mt-10 px-8 py-4 border border-[#c6a972]/30 uppercase tracking-widest hover:bg-[#c6a972] hover:text-black transition"
            >
              Order Now
            </a>

          </div>
        </section>

        <ProductGrid />
        <BrandManifesto />
        <Footer />

      </main>
    </>
  );
}