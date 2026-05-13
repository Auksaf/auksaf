"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "ROOH",
    subtitle: "The Aqua Elixir",
    vibe: "Fresh • Atmospheric • Elegant",
    status: "Available",
  },
  {
    name: "NOIR",
    subtitle: "Coming Soon",
    vibe: "Dark • Smoky • Mysterious",
    status: "In Development",
  },
  {
    name: "SULTAN",
    subtitle: "Coming Soon",
    vibe: "Royal • Warm • Powerful",
    status: "In Development",
  },
];

export default function ProductGrid() {
  return (
    <section className="relative z-10 py-24 md:py-32 xl:py-40 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 sm:mb-24">

          <p className="uppercase tracking-[0.35em] text-zinc-500 text-xs sm:text-sm mb-4 sm:mb-6">
            Collection
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-7xl tracking-[0.15em] sm:tracking-[0.2em]">
            Signature Fragrances
          </h2>

          <p className="mt-5 sm:mt-6 text-zinc-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2">
            Crafted through atmosphere, elegance, and emotional identity —
            fragrances designed to create unforgettable presence.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-10">

          {products.map((product, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-10"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.15),transparent_55%)]" />

              {/* Bottle Shape */}
              <div className="relative flex justify-center mb-8 sm:mb-12">

                <div className="w-[110px] sm:w-[140px] h-[200px] sm:h-[260px] rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-b from-zinc-700 to-black border border-white/10 shadow-[0_0_60px_rgba(198,169,114,0.12)] flex items-center justify-center">

                  <div className="text-center">

                    <p className="uppercase tracking-[0.3em] text-zinc-500 text-[9px] sm:text-[10px] mb-2 sm:mb-3">
                      AUKSAF
                    </p>

                    <h3 className="text-2xl sm:text-3xl tracking-[0.2em]">
                      {product.name}
                    </h3>

                  </div>

                </div>

              </div>

              {/* Info */}
              <div className="relative text-center">

                <h3 className="text-2xl sm:text-3xl tracking-[0.15em] mb-3 sm:mb-4">
                  {product.name}
                </h3>

                <p className="uppercase tracking-[0.25em] text-zinc-500 text-[10px] sm:text-xs mb-4 sm:mb-6">
                  {product.subtitle}
                </p>

                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  {product.vibe}
                </p>

                <p className="mt-4 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-zinc-600">
                  {product.status}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}