export const dynamic = "force-dynamic";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import StatusSelect from "./StatusSelect";
import LogoutButton from "@/components/LogoutButton";

// ---------------------------
// SUPABASE CLIENT (TOP LEVEL ONLY)
// ---------------------------
async function getSupabase() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set() {},
        remove() {},
      },
    }
  );
}

export default async function OrdersPage() {
  const supabase = await getSupabase();

  // ---------------------------
  // AUTH CHECK
  // ---------------------------
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // ---------------------------
  // FETCH ORDERS
  // ---------------------------
  const { data: orders, error } = await supabase
  .from("orders")
  .select("*")
  .order("created_at", { ascending: false });

console.log("USER:", user?.email);
console.log("ORDERS:", orders);
console.log("ERROR:", error);

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white p-10">
        <h1 className="text-2xl font-bold mb-4">Admin Orders</h1>
        <p className="text-red-500">Failed to load orders.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="mb-10 flex items-start justify-between">
  <div>
    <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
      AUKSAF Orders
    </h1>

    <p className="text-zinc-400 mt-3 text-sm md:text-base">
      Internal Order Management Dashboard
    </p>
  </div>

  <LogoutButton />
</div>

      <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md">
        <table className="w-full min-w-[1000px] text-left">

          <thead className="border-b border-white/10 bg-white/5">
            <tr>
              <th className="p-4 text-sm uppercase text-zinc-400">Customer</th>
              <th className="p-4 text-sm uppercase text-zinc-400">Phone</th>
              <th className="p-4 text-sm uppercase text-zinc-400">City</th>
              <th className="p-4 text-sm uppercase text-zinc-400">Product</th>
              <th className="p-4 text-sm uppercase text-zinc-400">Qty</th>
              <th className="p-4 text-sm uppercase text-zinc-400">Price</th>
              <th className="p-4 text-sm uppercase text-zinc-400">Status</th>
              <th className="p-4 text-sm uppercase text-zinc-400">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders?.map((order) => (
              <tr key={order.id} className="border-b border-white/5 hover:bg-white/5">

                <td className="p-4">
                  <p className="text-white font-medium">{order.name}</p>
                  <p className="text-xs text-zinc-500">{order.address}</p>
                </td>

                <td className="p-4 text-zinc-300">{order.phone}</td>
                <td className="p-4 text-zinc-300">{order.city}</td>
                <td className="p-4 text-zinc-300">{order.product}</td>
                <td className="p-4 text-zinc-300">{order.quantity}</td>
                <td className="p-4 text-zinc-300">Rs. {order.price}</td>

                <td className="p-4">
                  <StatusSelect
                    id={order.id}
                    currentStatus={order.status}
                  />
                </td>

                <td className="p-4 text-zinc-500 text-sm">
                  {new Date(order.created_at).toLocaleString()}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}