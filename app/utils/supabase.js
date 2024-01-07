import { createClient } from "@supabase/supabase-js";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const middlewareClient = ({ req, res }) => {
  const { user } = req.cookies;
  return createMiddlewareClient({
    supabaseClient: supabaseClient,
    req,
    res,
    session: { user },
  });
};
