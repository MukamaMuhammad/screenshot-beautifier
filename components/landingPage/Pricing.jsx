"use client";
import React from "react";
import { Button } from "@components/ui/button";
import axios from "axios";
import { supabaseClient } from "@app/utils/supabase";

const Pricing = () => {
  const handleClick = async () => {
    console.log("I was clicked");
    const {
      data: { user },
    } = await supabaseClient.auth.getUser();
    console.log(user.id);

    try {
      const { checkoutURL } = await axios.post("/api/payment/subscribe", {
        userId: user.id,
      });
      console.log(checkoutURL);
      window.location.href = checkoutURL;
    } catch (err) {
      //
      console.log(err.message);
    }
  };
  return (
    <section class="overflow-hidden">
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="mb-3">Pricing</h2>
          <p class="lg:w-2/3 mx-auto leading-relaxed ">
            Get unlimited access to Shotune editor, save unlimited snaps and
            remove the watermark and more advanced features.
          </p>
        </div>
        <div class="flex justify-center flex-wrap -m-4 ">
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full z-[-10]">
            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col justify-between relative overflow-hidden">
              <div>
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  START
                </h2>
                <h1 class="text-5xl  pb-4 mb-4 border-b border-gray-200 leading-none">
                  Free
                </h1>

                <p class="flex items-center  mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Edit and save up to 5 snaps
                </p>
                <p class="flex items-center  mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Advanced tools for backgrounds
                </p>
                <p class="flex items-center  mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Advanced tools for borders
                </p>
              </div>
              <div>
                <Button className="w-[100%]">Create Now</Button>

                <p class="text-xs  mt-3">
                  Almost all the Shotune features are available to all users for
                  free.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full z-[-10]">
            <div class="h-full p-6  rounded-lg border-2 border-primary flex flex-col justify-between relative overflow-hidden">
              <div>
                <span class="bg-primary  px-3 py-1 tracking-widest text-xs absolute  right-0 top-0 rounded-bl">
                  POPULAR
                </span>
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  PRO
                </h2>
                <h1 class="text-5xl  leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$4.99</span>
                  <span class="text-lg ml-1 font-normal ">/mo</span>
                </h1>

                <p class="flex items-center  mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Export unlimited images
                </p>
                <p class="flex items-center  mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  4K high-resolution exports
                </p>
                <p class="flex items-center  mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  No Shotune watermarks
                </p>
                <p class="flex items-center  mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Export in WebP and SVG format
                </p>
              </div>
              <div>
                <Button className="w-[100%]" onClick={() => handleClick}>
                  Buy Now
                </Button>
                <p class="text-xs  mt-3">
                  Special offer for the first 50 customers (20 left)
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full z-[-10]">
            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col justify-between relative overflow-hidden">
              <div>
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  LIFETIME
                </h2>
                <h1 class="text-5xl  leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$19.99</span>
                </h1>

                <p class="flex items-center  mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Export unlimited images
                </p>
                <p class="flex items-center  mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  4K high-resolution exports
                </p>
                <p class="flex items-center  mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  No Shotune watermarks
                </p>
                <p class="flex items-center  mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Export in WebP and SVG format
                </p>
              </div>
              <div>
                <Button className="w-[100%]">Buy Now</Button>
                <p class="text-xs  mt-3">
                  Get unlimited access to Shotune editor, All features in Pro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
