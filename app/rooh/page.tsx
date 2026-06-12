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

      <section className="max-w-5xl mx-auto px-6 py-20">

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

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">

        <h2 className="text-3xl mb-8">
          Fragrance Profile
        </h2>

        <div className="space-y-4 text-zinc-300">

          <p><strong>Fragrance Family:</strong> Fresh Aquatic Woody Musk</p>

          <p><strong>Character:</strong> Fresh • Clean • Modern • Elegant • Versatile</p>

          <p><strong>Gender:</strong> Unisex</p>

          <p><strong>Size:</strong> 50ML</p>

        </div>

      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">

        <h2 className="text-3xl mb-8">
          Performance
        </h2>

        <div className="space-y-6 text-zinc-300">

          <div>
            <h3 className="text-white text-xl mb-2">
              Projection
            </h3>

            <p>
              Noticeable yet refined, designed to create presence without becoming overpowering.
            </p>
          </div>

          <div>
            <h3 className="text-white text-xl mb-2">
              Longevity
            </h3>

            <p>
              Crafted for lasting performance throughout daily wear.
            </p>
          </div>

          <div>
            <h3 className="text-white text-xl mb-2">
              Sillage
            </h3>

            <p>
              An elegant scent trail that leaves a memorable impression.
            </p>
          </div>

        </div>

      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">

        <h2 className="text-3xl mb-8">
          Best For
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-zinc-300">

          <p>✓ Daily Wear</p>
          <p>✓ Office & Professional Settings</p>
          <p>✓ University & Campus Life</p>
          <p>✓ Casual Gatherings</p>
          <p>✓ Evening Outings</p>
          <p>✓ Social Events</p>

        </div>

      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">

        <h2 className="text-3xl mb-8">
          The Craftsmanship Behind ROOH
        </h2>

        <p className="text-zinc-300 leading-relaxed">
          Every batch of ROOH undergoes a carefully controlled maturation process before reaching customers.
        </p>

        <p className="mt-6 text-zinc-300 leading-relaxed">
          After blending, the fragrance is allowed to mature for approximately 40 days, enabling the ingredients to harmonize and develop a smoother, more balanced character.
        </p>

        <p className="mt-6 text-zinc-300 leading-relaxed">
          This extended maturation contributes to the fragrance's refinement, depth, and overall wearing experience.
        </p>

      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">

        <h2 className="text-3xl mb-8">
          The Story of ROOH
        </h2>

        <p className="text-zinc-300 leading-relaxed">
          The word ROOH represents the essence that remains after first impressions fade.
        </p>

        <p className="mt-6 text-zinc-300 leading-relaxed">
          Created to embody freshness, confidence, and quiet sophistication, ROOH is designed for individuals who value elegance without excess and presence without noise.
        </p>

        <p className="mt-6 text-zinc-300 leading-relaxed">
          It is not designed to dominate a room.
        </p>

        <p className="mt-4 text-white text-xl">
          It is designed to be remembered.
        </p>

      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/10">

        <h2 className="text-3xl mb-8">
          Verified Customer Reviews
        </h2>

        <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]">

          <p className="text-zinc-300 leading-relaxed">
            Customer reviews will be published here after verified orders have been delivered and feedback has been received.
          </p>

          <p className="mt-6 text-zinc-500">
            We believe in authentic customer experiences and only display reviews from verified purchasers of ROOH.
          </p>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-white/10">

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="/order"
            className="px-8 py-4 border border-[#c6a972]/30 text-center uppercase tracking-[0.2em] text-sm hover:bg-[#c6a972] hover:text-black transition"
          >
            Order ROOH
          </a>

          <a
            href="/"
            className="px-8 py-4 border border-white/10 text-center uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition"
          >
            Back Home
          </a>

        </div>

      </section>

    </main>
  );
}