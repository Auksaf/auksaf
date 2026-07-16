"use client";

import { useState } from "react";

export default function ReviewPage() {
  const [orderId, setOrderId] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function submitReview() {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId,
          rating,
          review,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage(data.message);

        setOrderId("");
        setRating(5);
        setReview("");
      } else {
        setMessage(data.message);
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="max-w-4xl mx-auto px-6 pt-8">
        <a
          href="/"
          className="inline-block border border-white/10 px-5 py-3 uppercase tracking-[0.2em] text-xs text-zinc-300 hover:bg-white hover:text-black transition"
        >
          ← Home
        </a>
      </div>

      <section className="max-w-2xl mx-auto px-6 py-20">

        <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm text-center">
          AUKSAF
        </p>

        <h1 className="text-5xl md:text-6xl text-center tracking-[0.2em] mt-5">
          Customer Review
        </h1>

        <p className="text-center text-zinc-400 mt-5">
          Your feedback helps us improve and guides future customers.
        </p>

        <div className="mt-14 space-y-7">

          <div>
            <label className="block mb-3 text-zinc-300">
              Order ID
            </label>

            <input
              type="text"
              placeholder="AK-ROOH-000001"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#c6a972]"
            />
          </div>

          <div>
            <label className="block mb-3 text-zinc-300">
              Rating
            </label>

            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#c6a972]"
            >
              <option value={5}>★★★★★ (5)</option>
              <option value={4}>★★★★☆ (4)</option>
              <option value={3}>★★★☆☆ (3)</option>
              <option value={2}>★★☆☆☆ (2)</option>
              <option value={1}>★☆☆☆☆ (1)</option>
            </select>
          </div>

          <div>
            <label className="block mb-3 text-zinc-300">
              Your Review
            </label>

            <textarea
              rows={6}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Tell us about your experience..."
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none focus:border-[#c6a972]"
            />
          </div>

          <button
            onClick={submitReview}
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-[#c6a972] text-black font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition"
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>

          {message && (
            <div className="border border-white/10 rounded-2xl p-5 text-center text-zinc-300">
              {message}
            </div>
          )}

        </div>

      </section>

    </main>
  );
}