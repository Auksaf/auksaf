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
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p>{user.email}</p>
        </div>

        <LogoutButton />
      </div>

      <Link href="/admin/orders" className="block mt-6 text-blue-400">
        Orders
      </Link>
    </div>
  );
}