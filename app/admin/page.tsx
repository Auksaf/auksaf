import Link from "next/link";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function AdminDashboard() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
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

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="mb-10 flex items-start justify-between">
  <div>
    <h1 className="text-4xl font-bold">
      AUKSAF Admin Dashboard
    </h1>

    <p className="text-zinc-400 mt-2">
      Welcome to the administration panel.
    </p>

    <p className="text-zinc-500 mt-2 text-sm">
      Logged in as: {user.email}
    </p>
  </div>
  <LogoutButton />
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