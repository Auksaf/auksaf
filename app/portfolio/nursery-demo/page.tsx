export default function NurseryDemo() {
  const plants = [
    "Date Palm",
    "Royal Palm",
    "Bougainvillea",
    "Mango Plant",
    "Citrus Trees",
    "Ornamental Shrubs",
  ];

  const categories = [
    "Palm Trees",
    "Fruit Plants",
    "Flowering Plants",
    "Indoor Plants",
    "Shade Trees",
    "Ornamental Plants",
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#172118] text-[#f4f0e6]">

      {/* ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[#d3bf89]/10 blur-3xl rounded-full" />

        <div className="absolute bottom-[-300px] right-[-300px] w-[700px] h-[700px] bg-green-500/10 blur-3xl rounded-full" />

        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-amber-300/5 blur-3xl rounded-full" />

      </div>

      {/* HERO */}
<section className="relative z-10 min-h-screen flex items-center px-6 py-28 md:py-36">

  <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <div>

      <p className="uppercase tracking-[0.45em] text-[#d3bf89] text-xs">
        Green Horizon Nurseries
      </p>

      <h1 className="mt-8 text-5xl md:text-7xl xl:text-8xl font-light leading-[0.95]">
        Cultivating
        <br />
        Nature.
        <br />
        Delivering
        <br />
        Excellence.
      </h1>

      <p className="mt-8 text-[#c7c2b3] text-lg max-w-xl leading-relaxed">
        Premium nursery stock, landscaping solutions, palm collections,
        ornamental plants and export-ready inventory for large-scale buyers.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <button className="px-8 py-4 bg-[#d3bf89] text-black rounded-xl font-medium hover:opacity-90 transition">
          Explore Collection
        </button>

        <button className="px-8 py-4 border border-[#d3bf89]/40 text-[#d3bf89] rounded-xl hover:bg-[#d3bf89] hover:text-black transition">
          Request Quote
        </button>

      </div>

      <div className="mt-12 flex gap-10 flex-wrap">

        <div>
          <h3 className="text-3xl font-light text-[#d3bf89]">500+</h3>
          <p className="text-sm text-[#bdb7a8]">
            Plant Varieties
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-light text-[#d3bf89]">20+</h3>
          <p className="text-sm text-[#bdb7a8]">
            Years Experience
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-light text-[#d3bf89]">50+</h3>
          <p className="text-sm text-[#bdb7a8]">
            Acres Cultivated
          </p>
        </div>

      </div>

    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="relative">

      <div className="absolute -inset-6 bg-[#d3bf89]/10 blur-3xl rounded-[40px]" />

      <div className="relative h-[650px] rounded-[36px] overflow-hidden border border-[#384739] bg-gradient-to-br from-[#314034] to-[#223023]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_50%)]" />

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center">

            <div className="text-7xl mb-6">
              🌴
            </div>

            <h3 className="text-2xl text-[#f4f0e6]">
              Premium Nursery Image
            </h3>

            <p className="mt-3 text-[#8c927f]">
              Drone Shot • Palm Avenue • Export Nursery
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* TRUST BAR */}
<section className="relative z-10 px-6 pb-20">

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">

      {[
        "Export Ready",
        "Nationwide Delivery",
        "Landscaping Projects",
        "Bulk Supply",
        "Quality Assured",
      ].map((item) => (
        <div
          key={item}
          className="bg-[#223023]/80 border border-[#384739] rounded-2xl p-6 text-center backdrop-blur-sm"
        >
          <div className="text-[#d3bf89] text-xl mb-2">
            ✓
          </div>

          <p className="text-sm uppercase tracking-wide text-[#c7c2b3]">
            {item}
          </p>
        </div>
      ))}

    </div>

  </div>

</section>
      {/* STATS */}
      <section className="relative z-10 py-20 px-6">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            { value: "50+", label: "Acres Cultivated" },
            { value: "500+", label: "Plant Varieties" },
            { value: "20+", label: "Years Experience" },
            { value: "Nationwide", label: "Delivery Network" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#223023]/90 border border-[#384739] rounded-2xl p-8 backdrop-blur-sm"
            >
              <h3 className="text-4xl font-light text-[#d3bf89]">
                {item.value}
              </h3>

              <p className="mt-3 text-[#bdb7a8] text-sm uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </section>
{/* WHY US */}
<section className="relative z-10 py-28 md:py-36 px-6">

  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto">

      <p className="uppercase tracking-[0.4em] text-[#d3bf89] text-xs">
        Why Choose Us
      </p>

      <h2 className="mt-5 text-4xl md:text-5xl font-light leading-tight">
        Why Green Horizon Nurseries?
      </h2>

      <p className="mt-6 text-[#c7c2b3] text-lg leading-relaxed">
        We don’t just grow plants — we build long-term supply systems for landscapers, developers,
        and export buyers who need reliability, scale, and quality.
      </p>

    </div>

    {/* CARDS */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        {
          title: "Premium Plant Quality",
          desc: "Healthy, well-rooted plants grown with professional nursery standards.",
        },
        {
          title: "Bulk Supply Capability",
          desc: "We handle large orders for housing societies, farms, and export buyers.",
        },
        {
          title: "Reliable Delivery",
          desc: "On-time supply with safe transport across regions.",
        },
        {
          title: "Landscaping Expertise",
          desc: "Complete green solutions from design to plantation execution.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="relative group"
        >

          {/* glow */}
          <div className="absolute inset-0 bg-[#d3bf89]/5 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition" />

          <div className="relative bg-[#223023] border border-[#384739] rounded-3xl p-8 hover:border-[#d3bf89]/40 transition h-full">

            <h3 className="text-xl font-light text-[#d3bf89]">
              {item.title}
            </h3>

            <p className="mt-4 text-sm text-[#c7c2b3] leading-relaxed">
              {item.desc}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>
      {/* CATEGORIES */}
      <section className="relative z-10 py-28 md:py-36 px-6 bg-[#1d2a1e]/50">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-[#d3bf89] text-xs">
              Collections
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-light">
              Explore Categories
            </h2>

          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">

            {categories.map((item) => (
              <div
                key={item}
                className="bg-[#2a392b] border border-[#3c4f3d] rounded-2xl p-10 hover:border-[#d3bf89]/50 hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-xl font-light">
                  {item}
                </h3>

                <p className="mt-3 text-[#bdb7a8] text-sm">
                  View Collection →
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FEATURED PLANTS */}
      <section className="relative z-10 py-28 md:py-36 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-[#d3bf89] text-xs">
              Featured Stock
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-light">
              Premium Plant Collection
            </h2>

          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

            {plants.map((plant) => (
              <div
                key={plant}
                className="overflow-hidden rounded-2xl border border-[#384739] bg-[#223023]"
              >

                <div className="h-60 bg-gradient-to-br from-[#314034] to-[#223023] flex items-center justify-center">

                  <span className="text-[#8c927f] text-sm tracking-wide">
                    Plant Image Placeholder
                  </span>

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-light">
                    {plant}
                  </h3>

                  <p className="mt-2 text-sm text-[#bdb7a8]">
                    Premium quality nursery stock available for inquiry.
                  </p>

                  <button className="mt-5 w-full py-3 bg-[#d3bf89] text-black rounded-lg font-medium hover:opacity-90 transition">
                    WhatsApp Inquiry
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="relative z-10 py-32 px-6 bg-[#1f2c20] border-t border-[#384739]">

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-[#d3bf89] text-xs">
            Let's Work Together
          </p>

          <h2 className="mt-4 text-5xl font-light">
            Start Your Project Today
          </h2>

          <p className="mt-6 text-[#c7c2b3] text-lg max-w-2xl mx-auto">
            Contact us directly for landscaping projects, bulk plant orders,
            export inquiries, and nursery consultations.
          </p>

          <a
            href="https://wa.me/923000000000"
            className="inline-block mt-10 px-10 py-4 bg-[#d3bf89] text-black rounded-xl font-medium hover:opacity-90 transition"
          >
            Chat on WhatsApp
          </a>

        </div>

      </section>

    </main>
  );
}