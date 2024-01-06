import { NextResponse } from "next/server";
import { axios } from "@lib/axios";
import { getUserSubscriptionPlan } from "@lib/subscription";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  try {
    const { userId } = await request.json();

    const { data: user } = await supabase
      .from("profile")
      .select("subscriptionId, currentPeriodEnd, lemon_customer_id, variantId")
      .eq("user_id", userId)
      .single();

    if (!user)
      return NextResponse.json({ message: "User not found" }, { status: 404 });

    const { isPro } = await getUserSubscriptionPlan(userId);

    if (!isPro)
      return NextResponse.json(
        { message: "You are not subscribed" },
        { status: 402 }
      );

    await axios.patch(
      `https://api.lemonsqueezy.com/v1/subscriptions/${user.subscriptionId}`,
      {
        data: {
          type: "subscriptions",
          id: user.subscriptionId,
          attributes: {
            cancelled: false, // <- Cancel
          },
        },
      },
      {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`,
        },
      }
    );

    return NextResponse.json({
      message: `Your subscription has been resumed.`,
    });
  } catch (err) {
    console.log({ err });
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    }
  }
}
