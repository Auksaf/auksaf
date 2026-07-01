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

      <main className="relative min-h-screen overflow-x-hidden bg-transparent text-white">

        {/* Effects */}
        <div className="hidden md:block">
          <MouseGlow />
        </div>

        <SmoothScroll />

        
        {/* ================= HERO (FIXED DESKTOP SPLIT LAYOUT) ================= */}
        <section
  id="home"
  className="
    relative
    w-full
    min-h-screen
    flex
    items-center
    px-6
    pt-20
    sm:pt-24
    overflow-hidden
  "
>
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
{/* Hero ambient atmosphere */}
<div
  className="
    absolute
    inset-0
    pointer-events-none
    -z-10
    bg-[radial-gradient(circle_at_50%_30%,
      rgba(230,190,120,0.035)_0%,
      rgba(120,78,38,0.018)_38%,
      transparent_72%
    )]
  "
/>
            {/* LEFT SIDE (TEXT) */}
            <div className="flex-1 text-center lg:text-left">

              <p className="font-[var(--font-inter)] text-[#b79b6d] tracking-[0.36em] text-xs sm:text-sm uppercase opacity-80">
  A Modern Fragrance House
</p>

              <h1
  className="
    mt-4
    font-[var(--font-cormorant)]
    text-5xl
    sm:text-6xl
    md:text-7xl
    lg:text-8xl
    font-medium
    tracking-[0.18em]
    text-[#f6f3ee]
    leading-none
  "
>
  AUKSAF
</h1>

              <p className="mt-8 font-[var(--font-inter)] text-[#b7b1a6] text-base leading-8 max-w-xl mx-auto lg:mx-0">
                Crafted through elegance, depth, and identity — fragrances designed to leave presence behind.
              </p>

              {/* BUTTONS */}
<div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

  <a
    href="/order"
    className="
      inline-flex
      items-center
      justify-center
      px-8
      py-4
      rounded-full
      bg-[#c6a972]
      text-[#111111]
      uppercase
      tracking-[0.22em]
      text-xs
      sm:text-sm
      font-[var(--font-inter)]
      transition-all
      duration-500
      hover:bg-[#d3b37d]
      hover:shadow-[0_0_45px_rgba(198,169,114,0.22)]
    "
  >
    Order ROOH
  </a>

  <a
    href="#collections"
    className="
      inline-flex
      items-center
      justify-center
      px-8
      py-4
      rounded-full
      border
      border-[#c6a972]/20
      bg-white/[0.015]
      text-[#d9d3ca]
      uppercase
      tracking-[0.22em]
      text-xs
      sm:text-sm
      font-[var(--font-inter)]
      transition-all
      duration-500
      hover:border-[#c6a972]/55
      hover:bg-white/[0.035]
      hover:text-[#f6f3ee]
    "
  >
    Explore Fragrances
  </a>

</div>

</div>
            {/* RIGHT SIDE (IMAGE) */}
<div className="flex-1 flex justify-center lg:justify-end">

  <div
    className="
      relative
      w-[300px]
      sm:w-[380px]
      md:w-[500px]
      lg:w-[620px]
      h-[420px]
      sm:h-[520px]
      md:h-[700px]
    "
  >

    {/* Luxury bottle atmosphere */}
<div
  className="
    absolute
    left-1/2
    top-[12%]
    -translate-x-1/2
    w-[92%]
    h-[74%]
    rounded-full
    bg-[radial-gradient(circle,
      rgba(236,205,150,0.09)_0%,
      rgba(205,168,108,0.04)_28%,
      rgba(150,110,65,0.018)_54%,
      transparent_74%
    )]
    blur-[110px]
  "
/>

    {/* Bottle */}
    <Image
      src="/perfumes/rooh.png"
      alt="ROOH Perfume"
      fill
      priority
      className="
        object-contain
        drop-shadow-[0_35px_80px_rgba(0,0,0,0.55)]
      "
      sizes="(max-width:768px) 80vw, 620px"
    />

    {/* Bottom reflection */}
<div
  className="
    absolute
    bottom-8
    left-1/2
    -translate-x-1/2
    w-[52%]
    h-8
    rounded-full
    bg-[rgba(198,169,114,0.055)]
    blur-[40px]
  "
/>

  </div>

</div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}
<section
  id="about"
  className="relative z-10 py-28 px-6 border-t border-[#c6a972]/8 bg-transparent"
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

      <div>
  <p className="text-zinc-400 leading-relaxed text-lg">
    AUKSAF is built around identity, elegance, and emotional depth.
    Every fragrance is designed to leave a lasting impression.
  </p>

  <div className="mt-16">

  <div className="mt-12">

  {/* Brand Signature */}
  <p
    className="
      font-[var(--font-cormorant)]
      text-[#d4b37a]
      text-lg
      md:text-xl
      tracking-[0.8em]
      uppercase
      mb-6
    "
  >
    AUKSAF
  </p>

  {/* Meaning */}
  <p
    className="
      font-[var(--font-cormorant)]
      text-[#ece6dc]
      text-xl
      md:text-2xl
      leading-relaxed
    "
  >
    <span className="text-[#d4b37a] font-semibold">A</span>dorned with{" "}
    <span className="text-[#d4b37a] font-semibold">U</span>ntold{" "}
    <span className="text-[#d4b37a] font-semibold">K</span>indness,
    <br />
    <span className="text-[#d4b37a] font-semibold">S</span>poken in{" "}
    <span className="text-[#d4b37a] font-semibold">A</span>romatic{" "}
    <span className="text-[#d4b37a] font-semibold">F</span>eelings.
  </p>

</div>

</div>
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
<section
  className="relative z-10 py-28 px-6 border-t border-[#c6a972]/8 bg-transparent"
>
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