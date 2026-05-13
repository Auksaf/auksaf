export default function CollectionShowcase() {
  return (
    <section className="relative z-10 py-24 md:py-32 xl:py-40 px-6 overflow-hidden">

      {/* Soft luxury background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,169,114,0.08),transparent_55%)]" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* Small label */}
        <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs sm:text-sm mb-6 sm:mb-10">
          Featured Essence
        </p>

        {/* Main title */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl tracking-[0.2em] leading-tight">
          ROOH
        </h2>

        <p className="mt-4 sm:mt-6 uppercase tracking-[0.3em] text-zinc-400 text-xs sm:text-sm">
          The Aqua Elixir
        </p>

        {/* Description */}
        <p className="mt-10 sm:mt-16 text-zinc-400 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
          A fragrance designed to feel like presence in motion.
          Fresh yet deep, light yet unforgettable — created to stay in memory long after it fades.
        </p>

        {/* Vibe tags */}
        <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-3 sm:gap-4">

          <span className="px-4 py-2 border border-white/10 rounded-full text-xs sm:text-sm text-zinc-400">
            Fresh
          </span>

          <span className="px-4 py-2 border border-white/10 rounded-full text-xs sm:text-sm text-zinc-400">
            Atmospheric
          </span>

          <span className="px-4 py-2 border border-white/10 rounded-full text-xs sm:text-sm text-zinc-400">
            Elegant
          </span>

        </div>

      </div>

    </section>
  );
}