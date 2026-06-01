"use client";

import { supabase } from "@/lib/supabase/client";

export default function LogoutButton() {
  const handleLogout = async () => {
    await supabase.auth.signOut();

    // safe redirect (avoids Next.js router crash in dev mode)
    setTimeout(() => {
      window.location.href = "/admin/login";
    }, 100);
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
    >
      Logout
    </button>
  );
}