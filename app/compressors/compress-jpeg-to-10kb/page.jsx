import React from "react";
import DynamicCompressor from "@components/tools/DynamicCompressor/page";
import CompressorsContent from "@components/tools/CompressorsContent/page";

export const metadata = {
  title: "Compress jpeg to 10kb - Shotune",
  description:
    "Resize JPEG to 10KB: Free Online Compression Tool. Easily reduce JPEG file size while maintaining image quality. Compress your images for web use.",
};

const copy = {
  Title: "Compress JPEG to 10KB",
  paragraph:
    "Reduce the file size of your JPEG images to 10KB with our efficient online tool.",
  heading: "Key Features",
  subheading1: "Easy Compression",
  paragraph1: "Compress your JPEG images to 10KB in just a few simple steps.",
  subheading2: "Fast Processing",
  paragraph2:
    "Experience quick compression without compromising on image quality.",
  subheading3: "Online Convenience",
  paragraph3:
    "Access our JPEG compressor tool online from any device with an internet connection.",
  subheading4: "User-Friendly Interface",
  paragraph4:
    "Our intuitive interface makes it easy for anyone to compress images with just a few clicks.",
  subheading5: "Free to Use",
  paragraph5:
    "Enjoy our JPEG compressor tool for free with no hidden charges or subscriptions.",
  paragraph66:
    "Effortlessly reduce the file size of your JPEG images to 10KB for various purposes, including web optimization and email attachments.",
  Title2: "How It Works",
  subheading6: "Upload JPEG Image",
  paragraph6: "Select the JPEG image you want to compress from your device.",
  subheading7: "Set Compression Level",
  paragraph7:
    "Choose the compression level or target file size (10KB) for your image.",
  subheading8: "Click Compress",
  paragraph8: "Click the compress button to initiate the compression process.",
  paragraph9:
    "Download the compressed JPEG image with a reduced file size of 10KB.",
  Title3: "Why Choose Our JPEG Compressor?",
  paragraph10:
    "Efficiency: Quickly compress JPEG images to 10KB without quality loss.",
  paragraph11: "Convenience: Access our online tool from anywhere, anytime.",
  paragraph12: "User-Friendly: Simple interface for easy compression.",
  paragraph13: "Speed: Experience fast processing times for quick results.",
  paragraph14: "Free: Enjoy unlimited JPEG compression without any cost.",
  paragraph15:
    "Versatility: Compress images for various purposes, including web optimization and sharing.",
  subheading9: "Start Compressing Now",
  paragraph16:
    "Begin reducing the file size of your JPEG images to 10KB with our hassle-free tool.",
  paragraph17:
    "No registration required. Simply upload your image and compress instantly.",
  paragraph18:
    "Efficiently manage your image file sizes for web optimization, email attachments, and more.",
  paragraph19:
    "Have questions or need assistance? Feel free to contact our support team.",
};

const page = () => {
  const size = 0.009765625;
  const format = "10kb";
  return (
    <div>
      <DynamicCompressor size={size} format={format} />
      <CompressorsContent copy={copy} />
    </div>
  );
};

export default page;
