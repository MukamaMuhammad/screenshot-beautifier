"use client";
import React from "react";
import Navbar from "@components/landingPage/Navbar";
import Hero from "@components/landingPage/Hero";
import Features from "@components/landingPage/Features";
import Pricing from "@components/landingPage/Pricing";
import Faqs from "@components/landingPage/Faqs";
import Footer from "@components/landingPage/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Faqs />
      <Footer />
    </div>
  );
};

export default page;
