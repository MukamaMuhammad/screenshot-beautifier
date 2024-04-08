import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { ls } from "./lemons";

export async function getBillings(userId: string) {
  try {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    const { data: profile, error } = await supabase
      .from("profile")
      .select("subscriptionId,currentPeriodEnd,lemon_customer_id,variantId")
      .eq("user_id", userId)
      .single();
    if (!profile) throw new Error("User not found");

    const response = await ls.retrieveSubscription({
      id: profile.subscriptionId,
    });
    const billingURL =
      response["data"]["attributes"]["urls"]["customer_portal"];

    return billingURL;
  } catch (error) {
    console.error("Error in getBillings:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
}
