import React from "react";
import Main from "@components/main";
import Hero from "@components/landingPage/Hero";
import Features from "@components/landingPage/Features";
import Pricing from "@components/landingPage/Pricing";
import Faqs from "@components/landingPage/Faqs";
import { getUserSubscriptionPlan } from "@lib/subscription";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

const page = async () => {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let isPro = false;

  if (user?.id) {
    const subscriptionData = await getUserSubscriptionPlan(user.id);
    isPro = subscriptionData.isPro;
  }
  return (
    <div>
      <Main isPro={isPro} id="editor" />
      <Hero />
      <Features />
      <Pricing />
      <Faqs />
    </div>
  );
};

export default page;
