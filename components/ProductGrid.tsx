import PerfumeBottle from "./PerfumeBottle";
import { products } from "../lib/products";

export default function ProductGrid() {
  return (
    <section className="relative z-10 py-32 px-6 border-t border-white/5">

      <div className="text-center mb-20">
        <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
          The ROOH Collection
        </p>

        <h2 className="text-5xl md:text-6xl mt-4 tracking-[0.2em]">
          Signature Variants
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-20">

        {products.map((p, i) => (
          <div key={i} className="flex flex-col items-center text-center">

            <div className="relative mb-10">
              <div className="absolute inset-0 scale-110 bg-[#c6a972]/10 blur-3xl rounded-full" />

              <PerfumeBottle image={p.image} name={p.name} />
            </div>

            <h3 className="text-2xl tracking-[0.2em]">{p.name}</h3>
            <p className="text-zinc-400 text-xs uppercase tracking-widest mt-2">
              {p.subtitle}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}