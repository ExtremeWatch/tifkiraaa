import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// Bolt Database injects VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY into .env automatically.
const env = import.meta.env as Record<string, string | undefined>;
const url = env.VITE_SUPABASE_URL;
const key = env.VITE_SUPABASE_ANON_KEY ?? env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  throw new Error(
    "Supabase is not connected. In Bolt, open the Database tab and click Connect / Create database.",
  );
}

export const supabase = createClient<Database>(url, key, {
  auth: { persistSession: true, autoRefreshToken: true },
});
