import React from "react";
import DynamicCompressor from "@components/tools/DynamicCompressor/page";
import CompressorsContent from "@components/tools/CompressorsContent/page";

export const metadata = {
  title: "Compress jpeg to 500kb - Shotune",
  description:
    "Optimize your JPEG images effortlessly to a versatile 500KB using our free online tool, without compromising their visual appeal.",
};

const copy = {
  Title: "Compress JPEG to 500KB",
  paragraph:
    "Reduce the file size of your JPEG images to 500KB effortlessly with our online compression tool.",
  heading: "Key Features",
  subheading1: "Effective Compression",
  paragraph1:
    "Efficiently compress your JPEG images to 500KB while preserving image quality.",
  subheading2: "Online Convenience",
  paragraph2:
    "Access our JPEG compressor tool online from any device with an internet connection.",
  subheading3: "User-Friendly Interface",
  paragraph3:
    "Our user-friendly interface allows you to compress images quickly and easily.",
  subheading4: "Fast Processing",
  paragraph4:
    "Experience fast compression times for efficient file size reduction.",
  subheading5: "Free to Use",
  paragraph5:
    "Enjoy our JPEG compressor tool for free without any hidden charges or subscriptions.",
  paragraph66:
    "Optimize your JPEG images for various purposes, including web publishing, emailing, and more.",
  Title2: "How It Works",
  subheading6: "Upload JPEG Image",
  paragraph6: "Select the JPEG image you want to compress from your device.",
  subheading7: "Choose Compression Level",
  paragraph7:
    "Adjust the compression level or target file size (500KB) for your image.",
  subheading8: "Initiate Compression",
  paragraph8: "Click the compress button to start the compression process.",
  paragraph9:
    "Download the compressed JPEG image with a reduced file size of 500KB.",
  Title3: "Why Choose Our JPEG Compressor?",
  paragraph10:
    "Efficiency: Quickly compress JPEG images to 500KB without compromising quality.",
  paragraph11: "Convenience: Access our online tool from anywhere, anytime.",
  paragraph12: "User-Friendly: Simple interface for easy compression.",
  paragraph13: "Speed: Experience fast processing times for quick results.",
  paragraph14: "Free: Enjoy unlimited JPEG compression at no cost.",
  paragraph15:
    "Versatility: Compress images for various purposes, including web optimization and sharing.",
  subheading9: "Get Started Now",
  paragraph16:
    "Begin compressing your JPEG images to 500KB with our hassle-free tool.",
  paragraph17:
    "No registration required. Simply upload your image and compress instantly.",
  paragraph18:
    "Efficiently manage your image file sizes for web optimization, email attachments, and more.",
  paragraph19: "Need assistance? Contact our support team for prompt help.",
};

const page = () => {
  const size = 0.48828125;
  const format = "500kb";
  return (
    <div>
      <DynamicCompressor size={size} format={format} />
      <CompressorsContent copy={copy} />
    </div>
  );
};

export default page;
