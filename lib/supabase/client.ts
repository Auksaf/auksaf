import { createBrowserClient } from "@supabase/ssr";

let supabaseInstance: any = null;

export const supabase = (() => {
  if (typeof window === "undefined") return null;

  if (!supabaseInstance) {
    supabaseInstance = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }

  return supabaseInstance;
})();