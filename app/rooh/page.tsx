export default function RoohPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HOME BUTTON */}
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <a
          href="/"
          className="inline-block border border-white/10 px-5 py-3 uppercase tracking-[0.2em] text-xs text-zinc-300 hover:bg-white hover:text-black transition"
        >
          ← Home
        </a>
      </div>

      {/* ================= HERO PRODUCT ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="flex justify-center mb-14">
          <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[360px] sm:h-[460px] md:h-[520px] lg:h-[580px]">

            <img
              src="/perfumes/product.png"
              alt="ROOH Perfume"
              className="w-full h-full object-contain"
            />

          </div>
        </div>

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
            AUKSAF
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl tracking-[0.2em]">
            ROOH
          </h1>

          <p className="mt-4 text-xl text-zinc-300">
            The Aqua Elixir
          </p>

          <p className="mt-4 text-[#c6a972] uppercase tracking-[0.2em] text-sm">
            A Premium Everyday Signature Fragrance
          </p>

          <p className="mt-8 text-2xl">
            50ML • Rs. 2,499
          </p>

        </div>
      </section>

      {/* ================= PROFILE ================= */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">

        <h2 className="text-3xl mb-8">Fragrance Profile</h2>

        <div className="space-y-4 text-zinc-300">
          <p><strong>Fragrance Family:</strong> Fresh Aquatic Woody Musk</p>
          <p><strong>Character:</strong> Fresh • Clean • Modern • Elegant • Versatile</p>
          <p><strong>Gender:</strong> Unisex</p>
          <p><strong>Size:</strong> 50ML</p>
        </div>

      </section>

      {/* ================= PERFORMANCE ================= */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">

        <h2 className="text-3xl mb-8">Performance</h2>

        <div className="space-y-6 text-zinc-300">

          <div>
            <h3 className="text-white text-xl mb-2">Projection</h3>
            <p>Noticeable yet refined, designed to create presence without overpowering.</p>
          </div>

          <div>
            <h3 className="text-white text-xl mb-2">Longevity</h3>
            <p>Crafted for lasting performance throughout daily wear.</p>
          </div>

          <div>
            <h3 className="text-white text-xl mb-2">Sillage</h3>
            <p>An elegant scent trail that leaves a memorable impression.</p>
          </div>

        </div>
      </section>

      {/* ================= BEST FOR ================= */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">

        <h2 className="text-3xl mb-8">Best For</h2>

        <div className="grid md:grid-cols-2 gap-4 text-zinc-300">
          <p>✓ Daily Wear</p>
          <p>✓ Office & Professional Settings</p>
          <p>✓ University & Campus Life</p>
          <p>✓ Casual Gatherings</p>
          <p>✓ Evening Outings</p>
          <p>✓ Social Events</p>
        </div>

      </section>

      {/* ================= CRAFT ================= */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">

        <h2 className="text-3xl mb-8">The Craftsmanship Behind ROOH</h2>

        <div className="space-y-6 text-zinc-300">
          <p>
            Every batch of ROOH undergoes a carefully controlled maturation process before reaching customers.
          </p>

          <p>
            After blending, the fragrance is allowed to mature for approximately 40 days, enabling the ingredients to harmonize and develop a smoother, more balanced character.
          </p>

          <p>
            This extended maturation contributes to refinement, depth, and performance consistency.
          </p>
        </div>

      </section>

      {/* ================= BANNER ================= */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="relative w-full h-[420px] md:h-[520px]">
          <img
            src="/perfumes/banner.png"
            alt="ROOH Banner"
            className="w-full h-full object-contain rounded-3xl border border-white/10"
          />
        </div>
      </div>

      {/* ================= STORY ================= */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">

        <h2 className="text-3xl mb-8">The Story of ROOH</h2>

        <div className="space-y-6 text-zinc-300">
          <p>
            The word ROOH represents the essence that remains after first impressions fade.
          </p>

          <p>
            Created to embody freshness, confidence, and quiet sophistication, ROOH is designed for individuals who value elegance without excess.
          </p>

          <p>
            It is not designed to dominate a room.
          </p>

          <p className="text-white text-xl">
            It is designed to be remembered.
          </p>
        </div>

      </section>

      {/* ================= VIDEO ================= */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">

        <h2 className="text-3xl mb-8">ROOH In Motion</h2>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-3xl border border-white/10"
        >
          <source src="/videos/rooh.mp4" type="video/mp4" />
        </video>

      </section>

      {/* ================= REVIEWS ================= */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">

        <h2 className="text-3xl mb-8">Verified Customer Reviews</h2>

        <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] text-zinc-300">
          Customer reviews will be published after verified purchases.
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-white/10">

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="/order"
            className="px-8 py-4 border border-[#c6a972]/30 uppercase tracking-[0.2em] text-sm hover:bg-[#c6a972] hover:text-black transition"
          >
            Order ROOH
          </a>

          <a
            href="/"
            className="px-8 py-4 border border-white/10 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition"
          >
            Back Home
          </a>

        </div>

      </section>

    </main>
  );
}