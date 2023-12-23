// import type { CreateCheckoutResult } from "lemonsqueezy.ts/dist/modules/types";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { axios } from "@lib/axios";
import { ls } from "../../../../lib/lemons";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export type CreateCheckoutResponse = {
  checkoutURL: string;
};

export async function POST(request: Request) {
  try {
    const { userId, userEmail, variantNumber } = await request.json();
    console.log(userId, userEmail);
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    // const { data: user } = await supabase
    //   .from("profile")
    //   .select("id, email")
    //   .eq("id", userId)
    //   .single();
    // console.log(user);

    if (!userId)
      return NextResponse.json(
        { message: "Your account was not found" },
        { status: 404 }
      );

    const variant = (
      await ls.listAllVariants({
        productId: process.env.LEMONS_SQUEEZY_PRODUCT_ID,
      })
    ).data[variantNumber];

    const checkout = await axios.post(
      "https://api.lemonsqueezy.com/v1/checkouts",
      {
        data: {
          type: "checkouts",
          attributes: {
            product_options: {
              enabled_variants: [variant.id],
            },

            checkout_data: { email: userEmail, custom: [userId] },
          },
          relationships: {
            store: {
              data: { type: "stores", id: process.env.LEMON_SQUEEZY_STORE_ID },
            },
            variant: { data: { type: "variants", id: variant.id } },
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`,
        },
      }
    );
    // as CreateCheckoutResult;
    return NextResponse.json(
      { checkoutURL: checkout.data.attributes.url },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message || err }, { status: 500 });
  }
}
