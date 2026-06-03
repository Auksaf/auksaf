"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";

export default function AdminDashboard() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.replace("/admin/login");
        return;
      }

      setUser(data.user);
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            AUKSAF Admin Dashboard
          </h1>

          <p className="text-zinc-400 mt-2">
            Welcome to the administration panel.
          </p>

          <p className="text-zinc-500 mt-2 text-sm">
            Logged in as: {user?.email}
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">

          <Link
            href="/"
            className="px-4 py-2 bg-white text-black rounded text-sm font-medium hover:bg-zinc-200 transition"
          >
            🏠 Home Page
          </Link>

          <Link
            href="/admin/orders"
            className="px-4 py-2 bg-white/10 text-white rounded text-sm font-medium hover:bg-white/20 transition"
          >
            📦 Orders
          </Link>

          <LogoutButton />

        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <Link
          href="/admin/orders"
          className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Orders
          </h2>

          <p className="text-zinc-400">
            Manage customer orders and update status.
          </p>
        </Link>

      </div>
    </div>
  );
}