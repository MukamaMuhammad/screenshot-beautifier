import { Buffer } from "buffer";
import crypto from "crypto";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import rawBody from "raw-body";
import { Readable } from "stream";
import { ls } from "@lib/lemons";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const body = await rawBody(Readable.from(Buffer.from(await request.text())));
  const headersList = headers();
  const payload = JSON.parse(body.toString());
  // console.log(payload);
  const sigString = headersList.get("x-signature");
  const secret = process.env.LEMONS_SQUEEZY_SIGNATURE_SECRET as string;
  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(body).digest("hex"), "utf8");
  const signature = Buffer.from(
    Array.isArray(sigString) ? sigString.join("") : sigString || "",
    "utf8"
  );

  // Check if the webhook event was for this product or not
  if (
    parseInt(payload.data.attributes.product_id) !==
    parseInt(process.env.LEMONS_SQUEEZY_PRODUCT_ID as string)
  ) {
    return NextResponse.json({ message: "Invalid product" }, { status: 403 });
  }

  // validate signature
  if (!crypto.timingSafeEqual(digest, signature)) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 403 });
  }

  const userId = payload.meta.custom_data[0];

  // Check if custom defined data i.e. the `userId` is there or not
  if (!userId) {
    return NextResponse.json(
      { message: "No userId provided" },
      { status: 403 }
    );
  }

  switch (payload.meta.event_name) {
    case "subscription_created": {
      const subscription = await ls.retrieveSubscription({
        id: payload.data.id,
      });

      await supabase
        .from("profile")
        .update({
          variantId: subscription.data.attributes.variant_id,
          currentPeriodEnd: subscription.data.attributes.renews_at,
          subscription_status: subscription.data.attributes.status,
          subscriptionId: `${subscription.data.id}`,
          lemon_customer_id: `${payload.data.attributes.customer_id}`,
        })
        .eq("user_id", userId);

      return NextResponse.json(
        { message: "subscription_created" },
        { status: 403 }
      );
    }

    case "subscription_updated": {
      const subscription = await ls.retrieveSubscription({
        id: payload.data.id,
      });

      // const subscriptionIdFromPayload = subscription.data.id;
      // console.log(subscriptionIdFromPayload);

      const { data: subscriptionId } = await supabase
        .from("profile")
        .select("subscriptionId")
        .eq("user_id", userId);

      if (!subscriptionId)
        return NextResponse.json(
          { message: "subscription_id not found" },
          { status: 403 }
        );

      await supabase
        .from("profile")
        .update({
          variantId: subscription.data.attributes.variant_id,
          currentPeriodEnd: subscription.data.attributes.renews_at,
        })
        .eq("user_id", userId);

      return NextResponse.json(
        { message: "subscription_updated" },
        { status: 403 }
      );

      // await prisma.user.update({
      //   where: { subscriptionId: user.subscriptionId },
      //   data: {
      //     variantId: subscription.data.attributes.variant_id,
      //     currentPeriodEnd: subscription.data.attributes.renews_at,
      //   },
      // });
    }

    default: {
      return NextResponse.json({ message: "No action" }, { status: 403 });
    }
  }
}
