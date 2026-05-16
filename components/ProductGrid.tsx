import PerfumeBottle from "./PerfumeBottle";
import { products } from "../lib/products";


export default function ProductGrid() {
  return (
    <section className="relative z-10 py-28 md:py-40 px-6 border-t border-white/5">

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,169,114,0.05),transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">

          <p className="uppercase tracking-[0.35em] text-zinc-500 text-xs sm:text-sm mb-5">
            The ROOH Collection
          </p>

          <h2 className="text-4xl md:text-6xl xl:text-7xl tracking-[0.18em]">
            Signature Variants
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            A cinematic fragrance universe crafted through atmosphere,
            elegance, identity, and emotional presence.
          </p>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-14 md:gap-16">

          {products.map((product, index) => (
            <div
              key={index}
              className="group relative border border-white/5 rounded-[2rem] bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:border-[#c6a972]/20 transition duration-500"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.10),transparent_60%)]" />

              <div className="relative p-10 md:p-12 flex flex-col items-center text-center">

                {/* Bottle */}
                <div className="relative mb-10">

                  <div className="absolute inset-0 scale-125 rounded-full bg-[#c6a972]/10 blur-3xl" />

                  <PerfumeBottle
                    image={product.image}
                    name={product.name}
                    subtitle={product.subtitle}
                  />

                </div>

                {/* Text */}
                <div>

                  <p className="uppercase tracking-[0.3em] text-zinc-500 text-[10px] mb-3">
                    AUKSAF
                  </p>

                  <h3 className="text-2xl md:text-3xl tracking-[0.18em]">
                    {product.name}
                  </h3>

                  <p className="mt-3 uppercase tracking-[0.25em] text-zinc-400 text-[11px]">
                    {product.subtitle}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}