import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";
import MouseGlow from "../components/MouseGlow";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import ProductGrid from "../components/ProductGrid";
import BrandManifesto from "../components/BrandManifesto";
import PerfumeBottle from "../components/PerfumeBottle";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-black text-white">

        {/* Desktop-only effects */}
        <div className="hidden md:block">
          <MouseGlow />
        </div>

        <SmoothScroll />

        {/* Background atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.10),transparent_40%)]" />

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#c6a972]/10 blur-3xl rounded-full" />

        {/* HERO */}
        <section
          id="home"
          className="relative z-10 min-h-screen flex items-center justify-center px-6 py-28 sm:py-24"
        >
          <Reveal>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* LEFT */}
              <div className="text-center lg:text-left">

                <p className="uppercase tracking-[0.35em] text-zinc-500 text-xs sm:text-sm mb-5">
                  A Modern Fragrance House
                </p>

                <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[8rem] leading-none tracking-[0.18em] font-semibold">
                  AUKSAF
                </h1>

                <p className="mt-8 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Crafted through elegance, depth, and identity fragrances designed to leave presence behind.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">

                  <a
                    href="/order"
                    className="px-7 py-4 bg-white text-black uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-zinc-200 transition duration-300 text-center"
                  >
                    Order ROOH
                  </a>

                  <a
                    href="#collections"
                    className="px-7 py-4 border border-white/20 uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-white hover:text-black transition duration-300 text-center"
                  >
                    Explore Fragrances
                  </a>

                </div>

              </div>

              {/* RIGHT */}
              <div className="relative flex items-center justify-center">

                <div className="absolute w-[260px] sm:w-[350px] lg:w-[450px] h-[260px] sm:h-[350px] lg:h-[450px] rounded-full border border-[#c6a972]/20" />
                <div className="absolute w-[200px] sm:w-[280px] lg:w-[350px] h-[200px] sm:h-[280px] lg:h-[350px] rounded-full border border-[#c6a972]/10" />

                <div className="relative w-[170px] sm:w-[200px] lg:w-[220px] h-[320px] sm:h-[380px] lg:h-[420px] rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-b from-zinc-800 to-zinc-950 border border-white/10 shadow-[0_0_70px_rgba(198,169,114,0.15)] backdrop-blur-xl flex items-center justify-center">

                  <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),transparent)]" />

                  <div className="text-center px-5 z-10">

                    <p className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-3">
                      Signature Collection
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-[0.2em] font-semibold">
                      ROOH
                    </h2>

                    <p className="mt-3 text-zinc-400 uppercase tracking-[0.25em] text-[10px] sm:text-xs">
                      The Aqua Elixir
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </Reveal>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="relative z-10 py-28 md:py-36 px-6 border-t border-white/5 bg-zinc-950/40"
        >
          <Reveal>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

              <div>
                <p className="uppercase tracking-[0.35em] text-zinc-500 text-xs sm:text-sm mb-6">
                  The Philosophy
                </p>

                <h2 className="text-4xl md:text-6xl leading-tight max-w-xl">
                  Fragrance Is More Than Scent, It Is Presence.
                </h2>
              </div>

              <div>
                <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                  AUKSAF is built around identity, elegance, and emotional depth.
                  Every fragrance is designed not merely to smell pleasant,
                  but to leave an impression that lingers in memory.
                </p>

                <p className="mt-8 text-zinc-500 leading-relaxed text-sm sm:text-base">
                  Crafted by msj with a modern luxury approach, our creations aim to balance
                  sophistication, projection, and atmosphere into a signature experience.
                </p>
              </div>

            </div>

          </Reveal>
        </section>

        {/* COLLECTIONS */}
        <section
          id="collections"
          className="relative z-10 py-32 md:py-44 px-6 overflow-hidden border-t border-white/5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,169,114,0.08),transparent_45%)]" />

          <Reveal>

            <div className="max-w-7xl mx-auto relative z-10">

              <div className="text-center mb-20 md:mb-24">

                <p className="uppercase tracking-[0.35em] text-zinc-500 text-xs sm:text-sm mb-5">
                  Signature Creation
                </p>

                <h2 className="text-5xl md:text-7xl tracking-[0.18em] font-light">
                  ROOH
                </h2>

                <p className="mt-5 uppercase tracking-[0.3em] text-zinc-400 text-xs sm:text-sm">
                  The Aqua Elixir
                </p>

              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

                <div className="space-y-10 text-center lg:text-left">
                  <div>
                    <p className="uppercase tracking-[0.3em] text-zinc-500 text-xs mb-3">
                      Identity
                    </p>
                    <h3 className="text-3xl">
                      Fresh. Elegant. Atmospheric.
                    </h3>
                  </div>

                  <div>
                    <p className="uppercase tracking-[0.3em] text-zinc-500 text-xs mb-3">
                      Experience
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                      Designed to create a calm yet unforgettable presence,
                      balancing freshness with smooth modern depth.
                    </p>
                  </div>
                </div>

                <div className="relative flex justify-center">
                  <div className="absolute w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full border border-[#c6a972]/10" />
                  <div className="absolute w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full border border-[#c6a972]/10" />

                  <PerfumeBottle
                    image="/perfumes/rooh.png"
                    name="ROOH"
                    subtitle="The Aqua Elixir"
                  />
                </div>

                <div className="space-y-10 text-center lg:text-left">
                  <div>
                    <p className="uppercase tracking-[0.3em] text-zinc-500 text-xs mb-3">
                      Craftsmanship
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                      Built with a refined luxury approach that focuses on projection,
                      smoothness, longevity, and emotional atmosphere.
                    </p>
                  </div>

                  <div>
                    <p className="uppercase tracking-[0.3em] text-zinc-500 text-xs mb-3">
                      Signature Aura
                    </p>
                    <h3 className="text-3xl">
                      Modern Aquatic Luxury
                    </h3>
                  </div>
                </div>

              </div>

            </div>

          </Reveal>
        </section>

        {/* PRICING */}
        <section className="relative z-10 py-28 md:py-36 px-6 border-t border-white/5 bg-zinc-950/30">

          <Reveal>

            <div className="max-w-4xl mx-auto text-center">

              <p className="uppercase tracking-[0.35em] text-zinc-500 text-xs sm:text-sm mb-6">
                Launch Edition
              </p>

              <h2 className="text-4xl md:text-6xl tracking-[0.15em]">
                ROOH — 50ML
              </h2>

              <div className="mt-10 flex flex-col items-center gap-4">

                <p className="text-zinc-500 line-through text-xl">Rs. 2999</p>

                <p className="text-5xl md:text-6xl font-light text-white">Rs. 2499</p>

                <p className="uppercase tracking-[0.25em] text-[#c6a972] text-xs">
                  Launch Price
                </p>

              </div>

              <p className="mt-10 text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                To avoid fake orders and delivery losses, customers will pay delivery charges in advance.
                Remaining amount will be Cash On Delivery across Pakistan.
              </p>

              <a
                href="/order"
                className="inline-block mt-10 px-8 py-4 border border-[#c6a972]/30 text-white uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-[#c6a972] hover:text-black transition duration-300"
              >
                Order Now
              </a>

            </div>

          </Reveal>

        </section>

        <ProductGrid />
        <BrandManifesto />
        <Footer />

      </main>
    </>
  );
}