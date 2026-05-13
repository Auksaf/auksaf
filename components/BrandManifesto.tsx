export default function BrandManifesto() {
  return (
    <section className="relative z-10 py-28 md:py-36 xl:py-44 px-6 overflow-hidden">

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,169,114,0.06),transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Section Label */}
        <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs md:text-sm mb-8 md:mb-10">
          Brand Manifesto
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-[6rem] leading-tight md:leading-[1.1] tracking-[0.08em] font-light max-w-5xl mx-auto">

          Fragrance Is Invisible,

          <span className="block mt-3 md:mt-0">
            Yet It Defines Presence.
          </span>

        </h2>

        {/* Description */}
        <p className="mt-10 md:mt-16 text-zinc-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">

          AUKSAF was created to transform scent into atmosphere,
          to craft fragrances that feel cinematic, emotional, elegant,
          and deeply memorable.

        </p>

        {/* Supporting Statement */}
        <p className="mt-6 md:mt-8 text-zinc-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">

          Every creation is designed not only to be worn,
          but to become part of identity, memory, and presence.

        </p>

      </div>

    </section>
  );
}