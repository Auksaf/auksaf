"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";
import StatusSelect from "./StatusSelect";

export default function OrdersPage() {
  const router = useRouter();

  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.replace("/admin/login");
        return;
      }

      const { data: ordersData } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      setOrders(ordersData || []);
      setLoading(false);
    };

    load();
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

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
            AUKSAF Orders
          </h1>

          <p className="text-zinc-400 mt-3 text-sm md:text-base">
            Internal Order Management Dashboard
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
            href="/admin"
            className="px-4 py-2 bg-white/10 text-white rounded text-sm font-medium hover:bg-white/20 transition"
          >
            📊 Dashboard
          </Link>

          <LogoutButton />

        </div>
      </div>

      <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md">
        <table className="w-full min-w-[1100px] text-left">

          <thead className="border-b border-white/10 bg-white/5">
            <tr>
              <th className="p-4">Order No</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Phone</th>
              <th className="p-4">City</th>
              <th className="p-4">Product</th>
              <th className="p-4">Qty</th>
              <th className="p-4">Price</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr
                key={o.id}
                className="border-b border-white/5 hover:bg-white/5"
              >
                {/* NEW: Order Number */}
                <td className="p-4 font-semibold text-[#c6a972]">
                  #{o.order_no ?? "-"}
                </td>

                <td className="p-4">
                  <div className="font-medium">{o.name}</div>
                  <div className="text-xs text-zinc-500">
                    {o.address}
                  </div>
                </td>

                <td className="p-4">{o.phone}</td>
                <td className="p-4">{o.city}</td>
                <td className="p-4">{o.product}</td>
                <td className="p-4">{o.quantity}</td>
                <td className="p-4">Rs. {o.price}</td>

                <td className="p-4">
                  <StatusSelect
                    id={o.id}
                    currentStatus={o.status}
                  />
                </td>

                <td className="p-4 text-sm text-zinc-500">
                  {new Date(o.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}