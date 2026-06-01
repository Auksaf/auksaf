"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function AdminLogin() {
const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const handleLogin = async (e: React.FormEvent) => {
e.preventDefault();

setLoading(true);
setError("");

const { error } = await supabase.auth.signInWithPassword({
  email,
  password,
});

setLoading(false);

if (error) {
  setError(error.message);
  return;
}

router.push("/admin");
router.refresh();

};

return ( <div className="min-h-screen flex items-center justify-center bg-black text-white"> <form
     onSubmit={handleLogin}
     className="w-full max-w-sm p-6 border border-white/10 rounded-xl bg-white/5"
   > <h1 className="text-2xl font-bold mb-6 text-center">
Admin Login </h1>

    {error && (
      <p className="text-red-500 text-sm mb-3">{error}</p>
    )}

    <input
      type="email"
      placeholder="Email"
      className="w-full mb-3 p-2 bg-black border border-white/20 rounded"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      className="w-full mb-4 p-2 bg-black border border-white/20 rounded"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button
      type="submit"
      disabled={loading}
      className="w-full bg-white text-black py-2 rounded font-semibold"
    >
      {loading ? "Logging in..." : "Login"}
    </button>
  </form>
</div>

);
}
