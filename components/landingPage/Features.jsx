"use client";
import React from "react";
import { CgExport } from "react-icons/cg";
import { PiSelectionBackgroundBold } from "react-icons/pi";
import { IoShareSocialOutline } from "react-icons/io5";
import { CgBrowser } from "react-icons/cg";
import { TbResize } from "react-icons/tb";
import { TbGridPattern } from "react-icons/tb";

const Features = () => {
  return (
    <section class="" id="features">
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-col text-center w-full mb-10">
          <h2 class="mb-3">Features</h2>
          <p class="lg:w-2/3 mx-auto leading-relaxed ">
            Customize backgrounds, margins, roundings, borders and more with
            Shotune. Elevate your screenshot game instantly.
          </p>
        </div>
        <div class="flex flex-wrap">
          <div class="p-4 md:w-1/3 bg-gradient-to-l from-cool-gray-700 via-cool-gray-900 to-black">
            <div class="flex rounded-lg h-full  p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class=" mr-3 h-10 w-10 inline-flex items-center justify-center">
                  <CgExport className="text-3xl" />
                </div>
                <h2 class=" text-lg title-font font-semibold">
                  Export in various formats
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  Export your design in JPG, PNG, WEBP and SVG format
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3 ">
            <div class="flex rounded-lg h-full  p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="h-10 w-10 mr-3 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                  <PiSelectionBackgroundBold className="text-3xl" />
                </div>
                <h2 class=" text-lg title-font font-semibold">
                  Apply beautiful backgrounds
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  Choose from an array of mockups, backgrounds for that perfect
                  touch
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3 ">
            <div class="flex rounded-lg h-full  p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="h-10 w-10 mr-3 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                  <IoShareSocialOutline className="text-3xl" />
                </div>
                <h2 class=" text-lg title-font font-semibold">
                  Effortless Sharing
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  Share your edited snaps instantly on social media, email, or
                  store them securely in the cloud
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3 ">
            <div class="flex rounded-lg h-full  p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="h-10 w-10 mr-3 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                  <CgBrowser className="text-3xl" />
                </div>
                <h2 class=" text-lg title-font font-semibold">
                  Add browser frames
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  Add a browser mockup with light or dark mode to your
                  screenshot for better presentation
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3 ">
            <div class="flex rounded-lg h-full  p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="h-10 w-10 mr-3 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                  <TbResize className="text-3xl" />
                </div>
                <h2 class=" text-lg title-font font-semibold">
                  Social media ready sizes
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  Export your image in sizes perfect for your tweets, Instagram
                  posts/stories, LinkedIn posts or choose your own size
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3 ">
            <div class="flex rounded-lg h-full  p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="h-10 w-10 mr-3 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                  <TbGridPattern className="text-3xl" />
                </div>
                <h2 class=" text-lg title-font font-semibold">
                  Background patterns
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  Patterns can make your images make it look like they're done
                  in Photoshop or Figma
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
