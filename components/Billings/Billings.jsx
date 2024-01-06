"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Button } from "@components/ui/button";
import { MdOutlineCelebration } from "react-icons/md";

export default function Billings(props) {
  const {
    userId,
    isCanceled,
    isPro,
    normalDateString,
    updatePaymentMethodURL,
  } = props;
  const router = useRouter();

  // If the subscription is cancelled, let the user resume his plan
  if (isCanceled && normalDateString) {
    const handleResumeSubscription = async () => {
      try {
        const response = await fetch("/api/payment/resume-subscription", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
          }),
        });
        const { message } = await response.json();
        router.refresh();
        toast.success(message);
      } catch (err) {
        console.log(err);
        //
      }
    };

    return (
      <div className="flex flex-col justify-between items-center gap-4">
        <p>
          You have cancelled the subscription but you still have access to our
          product until {normalDateString}
        </p>
        <Button className="w-full" onClick={handleResumeSubscription}>
          Resume plan
        </Button>
        <a
          href={updatePaymentMethodURL}
          className="w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full">Update payment method</Button>
        </a>
      </div>
    );
  }

  // If the user is subscribed, let him cancel his plan
  const handleCancelSubscription = async () => {
    try {
      const response = await fetch("/api/payment/cancel-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
        }),
      });
      const { message } = await response.json();
      router.refresh();
      toast.success(message);
    } catch (err) {
      console.log(err);
      //
    }
  };

  return (
    <div className="flex flex-col justify-between items-center gap-4">
      <p className="">You are subscribed to our product. Congratulations!</p>

      <Button
        className="w-full bg-red-500 hover:bg-red-500 hover:bg-opacity-90"
        onClick={handleCancelSubscription}
      >
        Cancel
      </Button>
      {updatePaymentMethodURL && (
        <a
          href={updatePaymentMethodURL}
          className="w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full">Update payment method</Button>
        </a>
      )}
    </div>
  );
}
