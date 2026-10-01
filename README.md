# Tifkira — shared event photo albums

React + Vite + TanStack Router + Tailwind v4, using Bolt Database (Supabase).

## Run on Bolt.new
1. Import this project into Bolt.
2. Open the **Database** tab and create/connect the Bolt Database. Bolt writes `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to `.env`.
3. Apply the migrations in `supabase/migrations/` (Bolt prompts for this; run them in filename order).
4. Preview. Sign up with email and password.
