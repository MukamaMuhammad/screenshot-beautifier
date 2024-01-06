import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { ls } from "./lemons";
import moment from "moment";

export async function getUserSubscriptionPlan(userId: string) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const { data: profile, error } = await supabase
    .from("profile")
    .select("subscriptionId,currentPeriodEnd,lemon_customer_id,variantId")
    .eq("user_id", userId)
    .single();

  if (!profile) throw new Error("User not found");

  // Convert the string to a Moment.js object
  const currentPeriodEnd = moment(profile.currentPeriodEnd);
  const currentDate = moment();

  // Convert Moment.js object to a normal date string
  var normalDateString = currentPeriodEnd.format("YYYY-MM-DDTHH:mm:ss.SSSSZ");

  // Check if user is on a pro plan.
  const isPro: boolean =
    profile.variantId &&
    profile.currentPeriodEnd &&
    currentPeriodEnd.isAfter(currentDate);

  // If user has a pro plan, check cancel status on Stripe.
  let isCanceled = false;
  let updatePaymentMethodURL = null;

  if (profile.subscriptionId) {
    const subscription = await ls.retrieveSubscription({
      id: profile.subscriptionId,
    });
    if (isPro && profile.subscriptionId) {
      isCanceled = subscription.data.attributes.cancelled;
    }
    updatePaymentMethodURL =
      subscription.data.attributes.urls.update_payment_method;
  }

  return {
    ...profile,
    normalDateString,
    isCanceled,
    isPro,
    updatePaymentMethodURL,
  };
}
