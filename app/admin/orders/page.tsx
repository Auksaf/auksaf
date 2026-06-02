"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
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
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">AUKSAF Orders</h1>
        <LogoutButton />
      </div>

      <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/5">
        <table className="w-full text-left">

          <thead>
            <tr>
              <th className="p-3">Customer</th>
              <th className="p-3">Phone</th>
              <th className="p-3">City</th>
              <th className="p-3">Product</th>
              <th className="p-3">Qty</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-white/10">

                <td className="p-3">
                  <div>{o.name}</div>
                  <div className="text-xs text-gray-400">{o.address}</div>
                </td>

                <td className="p-3">{o.phone}</td>
                <td className="p-3">{o.city}</td>
                <td className="p-3">{o.product}</td>
                <td className="p-3">{o.quantity}</td>
                <td className="p-3">Rs. {o.price}</td>

                <td className="p-3">
                  <StatusSelect
                    id={o.id}
                    currentStatus={o.status}
                  />
                </td>

                <td className="p-3 text-sm text-gray-400">
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