import React from "react";
import DynamicCompressor from "@components/tools/DynamicCompressor/page";
import CompressorsContent from "@components/tools/CompressorsContent/page";
export const metadata = {
  title: "Compress PNG to 300kb - Shotune",
  description:
    "Efficiently compress your PNG files to 300KB without sacrificing image integrity, courtesy of our intuitive online tool.",
};

const copy = {
  Title: "Compress PNG to 300KB",
  paragraph:
    "Easily reduce the size of your PNG images to 300KB with our efficient compression tool.",
  heading: "Key Features",
  subheading1: "Efficient Compression",
  paragraph1:
    "Effectively compress your PNG images to 300KB while maintaining high quality.",
  subheading2: "Simple Resizing",
  paragraph2:
    "Resize your PNG images to fit within the 300KB limit without sacrificing clarity.",
  subheading3: "Online Convenience",
  paragraph3:
    "Access our PNG compressor tool online from any device with internet access.",
  subheading4: "User-Friendly Interface",
  paragraph4: "Our intuitive interface makes PNG compression quick and simple.",
  subheading5: "Fast Processing",
  paragraph5:
    "Experience swift compression times for efficient reduction of file size.",
  paragraph66:
    "Optimize your PNG images for various purposes, including web publishing, emailing, and more.",
  Title2: "How It Works",
  subheading6: "Upload PNG Image",
  paragraph6: "Select the PNG image you want to compress from your device.",
  subheading7: "Choose Compression Level",
  paragraph7:
    "Adjust the compression level or target file size (300KB) for your image.",
  subheading8: "Initiate Compression",
  paragraph8: "Click the compress button to start the compression process.",
  paragraph9:
    "Download the compressed PNG image with a reduced file size of 300KB.",
  Title3: "Why Choose Our PNG Compressor?",
  paragraph10:
    "Efficiency: Quickly compress PNG images to 300KB without compromising quality.",
  paragraph11: "Convenience: Access our online tool from anywhere, anytime.",
  paragraph12: "User-Friendly: Simple interface for easy compression.",
  paragraph13: "Speed: Experience fast processing times for quick results.",
  paragraph14: "Free: Enjoy unlimited PNG compression at no cost.",
  paragraph15:
    "Versatility: Compress images for various purposes, including web optimization and sharing.",
  subheading9: "Get Started Now",
  paragraph16:
    "Begin compressing your PNG images to 300KB with our hassle-free tool.",
  paragraph17:
    "No registration required. Simply upload your image and compress instantly.",
  paragraph18:
    "Efficiently manage your image file sizes for web optimization, email attachments, and more.",
  paragraph19: "Need assistance? Contact our support team for prompt help.",
};

const page = () => {
  const size = 0.29296875;
  const format = "300kb";
  return (
    <div>
      <DynamicCompressor size={size} format={format} />
      <CompressorsContent copy={copy} />
    </div>
  );
};

export default page;
