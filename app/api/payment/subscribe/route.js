import { NextResponse } from "next/server";
import axios from "axios";
import { ls } from "../../../../lib/lemons";
import { supabaseClient } from "@app/utils/supabase";

export async function POST(request) {
  try {
    const { userId } = await request.json();

    const { data: user } = await supabaseClient
      .from("profile")
      .select("id, email")
      .eq("id", userId)
      .single();

    if (!user)
      return NextResponse.json(
        { message: "Your account was not found" },
        { status: 404 }
      );

    const variant = (
      await ls.listAllVariants({
        productId: process.env.LEMONS_SQUEEZY_PRODUCT_ID,
      })
    ).data[0];

    const checkout = await axios.post(
      "https://api.lemonsqueezy.com/v1/checkouts",
      {
        data: {
          type: "checkouts",
          attributes: {
            checkout_data: { email: user.email, custom: [user.id] },
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
    return NextResponse.json(
      { checkoutURL: checkout.data.attributes.url },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: err.message || err }, { status: 500 });
  }
}
