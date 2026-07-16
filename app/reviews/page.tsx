import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reviews from "../../components/Reviews";

export default function ReviewsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">

        <section className="max-w-6xl mx-auto px-6 py-24">

          <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm text-center">
            Verified Customers
          </p>

          <h1 className="text-5xl md:text-6xl tracking-[0.2em] text-center mt-5">
            Customer Reviews
          </h1>

          <p className="text-center text-zinc-400 mt-6 max-w-2xl mx-auto leading-8">
            Every review displayed here has been submitted by a verified
            AUKSAF customer after purchasing ROOH.
          </p>

          <div className="mt-20">
            <Reviews />
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}