// components/ProtectedRoute.js
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const ProtectedRouter = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const checkRole = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/auth/signin"); // Redirect to login if not authenticated
      } else {
        // Check the user's role in the Supabase profile table
        const { data, error } = await supabase
          .from("profile")
          .select("role")
          .eq("user_id", user.id)
          .single();

        if (error || !data || data.role !== "admin") {
          router.replace("/"); // Redirect to unauthorized page if not an admin
        } else {
          setLoading(false);
        }
      }
    };

    checkRole();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRouter;
