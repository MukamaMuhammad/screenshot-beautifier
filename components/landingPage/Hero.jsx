import React from "react";
import Image from "next/image";
import { Button } from "@components/ui/button";
import img1 from "@public/images/img1.webp";
import HeroImage from "@public/images/hero.png";

const Hero = () => {
  return (
    <section class="">
      <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center pt-10">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class=" mb-4">
            Create{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-purple-500">
              Stunning
            </span>{" "}
            <br class="hidden lg:inline-block" />
            Screenshots
          </h1>
          <p class="mb-8 leading-relaxed">
            Shotune is the ultimate online tool for creating stunning and
            professional screenshots. No need to install anything, just use your
            browser.
          </p>
          <div>
            <Button className="text-[16px]">Create for free!</Button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-[100%] flex items-center justify-center">
          <Image
            class="object-cover object-center rounded"
            alt="hero"
            src={HeroImage}
          />
          {/* <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
