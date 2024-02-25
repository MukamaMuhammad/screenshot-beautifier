import React from "react";
import DynamicCompressor from "@components/tools/DynamicCompressor/page";
import CompressorsContent from "@components/tools/CompressorsContent/page";
export const metadata = {
  title: "Compress jpeg to 200kb - Shotune",
  description:
    "compress jpeg to 200kb, compress jpeg to 200kb online, free compress jpeg to 200kb, jpg to 200kb, jpeg to 200kb, compress jpeg image to 200kb.",
};

const copy = {
  Title: "Compress JPEG to 200KB",
  paragraph:
    "Reduce the file size of your JPEG images to 200KB effortlessly with our online compression tool.",
  heading: "Key Features",
  subheading1: "Efficient Compression",
  paragraph1:
    "Compress your JPEG images to 200KB while preserving high image quality.",
  subheading2: "Online Convenience",
  paragraph2:
    "Access our JPEG compressor tool online from any device with an internet connection.",
  subheading3: "User-Friendly Interface",
  paragraph3:
    "Our intuitive interface makes it easy to compress images with just a few clicks.",
  subheading4: "Fast Processing",
  paragraph4:
    "Experience quick compression times for efficient file size reduction.",
  subheading5: "Free to Use",
  paragraph5:
    "Enjoy our JPEG compressor tool for free without any hidden charges or subscriptions.",
  paragraph66:
    "Effortlessly reduce the file size of your JPEG images to 200KB for various purposes, including web optimization and sharing.",
  Title2: "How It Works",
  subheading6: "Upload JPEG Image",
  paragraph6: "Select the JPEG image you want to compress from your device.",
  subheading7: "Set Compression Level",
  paragraph7:
    "Choose the compression level or target file size (200KB) for your image.",
  subheading8: "Click Compress",
  paragraph8: "Click the compress button to initiate the compression process.",
  paragraph9:
    "Download the compressed JPEG image with a reduced file size of 200KB.",
  Title3: "Why Choose Our JPEG Compressor?",
  paragraph10:
    "Efficiency: Quickly compress JPEG images to 200KB without compromising quality.",
  paragraph11: "Convenience: Access our online tool from anywhere, anytime.",
  paragraph12: "User-Friendly: Simple interface for easy compression.",
  paragraph13: "Speed: Experience fast processing times for quick results.",
  paragraph14: "Free: Enjoy unlimited JPEG compression at no cost.",
  paragraph15:
    "Versatility: Compress images for various purposes, including web optimization and sharing.",
  subheading9: "Start Compressing Now",
  paragraph16:
    "Begin reducing the file size of your JPEG images to 200KB with our hassle-free tool.",
  paragraph17:
    "No registration required. Simply upload your image and compress instantly.",
  paragraph18:
    "Efficiently manage your image file sizes for web optimization, email attachments, and more.",
  paragraph19:
    "Have questions or need assistance? Feel free to contact our support team.",
};

const page = () => {
  const size = 0.1953125;
  const format = "200kb";
  return (
    <div>
      <DynamicCompressor size={size} format={format} />
      <CompressorsContent copy={copy} />
    </div>
  );
};

export default page;
