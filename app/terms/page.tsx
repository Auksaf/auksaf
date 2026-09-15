import MouseGlow from "@/components/MouseGlow";

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-transparent text-white">
      <div className="hidden md:block">
        <MouseGlow />
      </div>

      <div className="relative z-10 min-h-screen px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <a
            href="/"
            className="inline-block mb-16 border border-white/10 px-5 py-3 uppercase tracking-[0.2em] text-xs text-zinc-300 hover:bg-white hover:text-black transition"
          >
            ← Return to Home
          </a>

          <h1 className="text-4xl md:text-5xl tracking-[0.18em] mb-12">
            Terms & Conditions
          </h1>

          <div className="space-y-10 text-zinc-300 leading-relaxed">
            <section>
              <h2 className="text-2xl text-white mb-4">1. General</h2>
              <p>
                Welcome to AUKSAF. By accessing or placing an order through our
                website, you agree to comply with our terms and policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">
                2. Orders & Verification
              </h2>
              <p>
                AUKSAF reserves the right to verify, confirm, or refuse suspicious
                or fake orders for security and operational reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">
                3. Pricing & Availability
              </h2>
              <p>
                Prices and product availability may change without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">
                4. Delivery
              </h2>
              <p>
                Delivery timelines may vary depending on location, courier
                operations, and public holidays.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">
                5. Intellectual Property
              </h2>
              <p>
                All branding, visuals, logos, and content belong to AUKSAF and
                may not be copied or reproduced without permission.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}