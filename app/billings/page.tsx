import React from "react";
import { redirect } from "next/navigation";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getUserSubscriptionPlan } from "@lib/subscription";
import Billings from "@components/Billings/Billings";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ManageSubscription = async () => {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data: session, error } = await supabase.auth.getSession();
  console.log(session);

  if (!session) {
    redirect("/signin");
  }

  if (session) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const userId: any = user?.id;
    const { isCanceled, isPro, normalDateString, updatePaymentMethodURL } =
      await getUserSubscriptionPlan(userId);
    return (
      <div className="h-[80vh] container px-5 py-10 mx-auto flex items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center">
              <h2>Billings</h2>
            </CardTitle>
            <CardDescription className="text-center">
              Here is your billing Information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Billings
              userId={userId}
              isCanceled={isCanceled}
              isPro={isPro}
              normalDateString={normalDateString}
              updatePaymentMethodURL={updatePaymentMethodURL}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default ManageSubscription;
