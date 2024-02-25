import React from "react";
import MBToKBConverter from "@components/tools/mbtokb/page";
import CompressorsContent from "@components/tools/CompressorsContent/page";

export const metadata = {
  title: "MB to KB Converter - Shotune",
  description:
    "Free online mb to kb converter tool that allows you to convert your mb's value into kb's within seconds.",
};

const copy = {
  Title: "MB to KB Converter",
  paragraph:
    "Easily convert megabytes (MB) to kilobytes (KB) and vice versa with our simple and efficient MB to KB converter tool.",
  heading: "Key Features",
  subheading1: "Quick Conversion",
  paragraph1: "Convert MB to KB or KB to MB in just a few clicks.",
  subheading2: "User-Friendly Interface",
  paragraph2:
    "Our intuitive interface makes it easy for anyone to use, whether you're a beginner or an experienced user.",
  subheading3: "Accurate Results",
  paragraph3:
    "Get precise conversions with our reliable MB to KB converter tool.",
  subheading4: "Cross-Platform Compatibility",
  paragraph4:
    "Access our converter tool from any device with internet access, including desktops, laptops, tablets, and smartphones.",
  subheading5: "Free to Use",
  paragraph5:
    "Enjoy our MB to KB converter tool for free with no hidden fees or subscriptions.",
  paragraph66:
    "Efficiently manage your file sizes by converting between MB and KB as needed.",
  Title2: "How It Works",
  subheading6: "Input File Size",
  paragraph6: "Enter the file size in MB or KB that you want to convert.",
  subheading7: "Select Conversion Direction",
  paragraph7:
    "Choose whether you want to convert from MB to KB or from KB to MB.",
  subheading8: "Click Convert",
  paragraph8:
    "Click the convert button to instantly see the converted file size.",
  paragraph9: "Download or copy the converted size for your use.",
  Title3: "Why Choose Our MB to KB Converter?",
  paragraph10: "Speed: Quickly convert file sizes without any delays.",
  paragraph11: "Accuracy: Get precise conversions every time.",
  paragraph12: "Convenience: Access our converter tool anytime, anywhere.",
  paragraph13:
    "Ease of Use: Our user-friendly interface makes conversion simple for everyone.",
  paragraph14: "Free: Enjoy unlimited conversions without any cost.",
  paragraph15:
    "Versatility: Convert file sizes for various purposes, including file storage, web optimization, and more.",
  subheading9: "Get Started Now",
  paragraph16:
    "Start converting file sizes between MB and KB with our easy-to-use tool.",
  paragraph17:
    "No sign-up required. Simply input your file size and convert instantly.",
  paragraph18:
    "Effortlessly manage your file sizes with our efficient MB to KB converter.",
  paragraph19:
    "Have questions or need assistance? Contact our support team for help.",
};

const page = () => {
  return (
    <div>
      <MBToKBConverter />
      <CompressorsContent copy={copy} />
    </div>
  );
};

export default page;
