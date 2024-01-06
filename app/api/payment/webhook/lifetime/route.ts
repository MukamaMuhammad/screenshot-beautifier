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
  console.log(payload.data.attributes.first_order_item.product_id);
  if (
    parseInt(payload.data.attributes.first_order_item.product_id) !==
    parseInt(process.env.LEMONS_SQUEEZY_PRODUCT_ID as string)
  ) {
    return NextResponse.json({ message: "Invalid product" }, { status: 403 });
  }

  // validate signature
  if (!crypto.timingSafeEqual(digest, signature)) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 403 });
  }

  const userId = payload.meta.custom_data[0];
  console.log(`webhook: ${userId}`);

  // Check if custom defined data i.e. the `userId` is there or not
  if (!userId) {
    return NextResponse.json(
      { message: "No userId provided" },
      { status: 403 }
    );
  }

  switch (payload.meta.event_name) {
    case "order_created": {
      console.log("Lifetime webhook ran");
      const LifetimePlan =
        payload.data.attributes.first_order_item.variant_name === "Lifetime";

      if (LifetimePlan) {
        await supabase
          .from("profile")
          .update({
            variantId: payload.data.attributes.first_order_item.variant_id,
            currentPeriodEnd: "2045-08-11T13:47:28.000000Z",
            subscription_status: payload.data.attributes.status,
            subscriptionId: null,
            lemon_customer_id: `${payload.data.attributes.customer_id}`,
          })
          .eq("user_id", userId);
        return NextResponse.json(
          { message: "Lifetime subscription created" },
          { status: 403 }
        );
      } else {
        return NextResponse.json(
          { message: "product name isn't Lifetime" },
          { status: 403 }
        );
      }
    }

    default: {
      return NextResponse.json({ message: "No action" }, { status: 403 });
    }
  }
}
