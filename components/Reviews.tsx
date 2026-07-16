"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

type Review = {
  id: string;
  customer_name: string;
  city: string;
  rating: number;
  review: string;
  created_at: string;
};

type ReviewsProps = {
  limit?: number;
};

export default function Reviews({ limit }: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReviews();
  }, []);

  async function loadReviews() {
    let query = supabase
      .from("reviews")
      .select("*")
      .eq("approved", true)
      .order("created_at", { ascending: false });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (!error && data) {
      setReviews(data);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] text-zinc-400 text-center">
        Loading customer reviews...
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02] text-zinc-400 text-center">
        No customer reviews yet.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border border-white/10 rounded-3xl p-6 bg-white/[0.03]"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl text-white font-semibold">
                {review.customer_name}
              </h3>

              <p className="text-zinc-500 text-sm">
                {review.city}
              </p>
            </div>

            <div className="text-[#c6a972] text-lg">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </div>

          <p className="text-zinc-300 leading-7 whitespace-pre-wrap">
            {review.review}
          </p>

          <div className="mt-6 text-xs text-zinc-500">
            {new Date(review.created_at).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
}