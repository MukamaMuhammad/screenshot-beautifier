"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@components/ui/button";
import { MdOutlineCelebration } from "react-icons/md";

export default function Billings(billingUrl) {
  const router = useRouter();
  console.log(billingUrl);
  const handleBillings = async (e) => {
    e.preventDefault();
    console.log("button clicked");
    window.location = "https://shotune.lemonsqueezy.com/billing";
  };

  return (
    <div className="flex flex-col justify-between items-center gap-4">
      <p className="">
        You will be redirected to Lemonsqueezy to manage your subscription!
      </p>

      <Button
        className="w-full bg-red-500 hover:bg-red-500 hover:bg-opacity-90"
        onClick={handleBillings}
      >
        Handle billings
      </Button>
    </div>
  );
}
