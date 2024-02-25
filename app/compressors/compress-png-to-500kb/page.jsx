import React from "react";
import DynamicCompressor from "@components/tools/DynamicCompressor/page";
import CompressorsContent from "@components/tools/CompressorsContent/page";
export const metadata = {
  title: "Compress PNG to 500kb - Shotune",
  description:
    "Compress your PNG size effortlessly to 500KB while preserving image clarity, thanks to our efficient online tool.",
};

const copy = {
  Title: "Compress PNG to 500KB",
  paragraph:
    "Effortlessly reduce the size of your PNG files to 500KB with our efficient compressor tool.",
  heading: "Key Features",
  subheading1: "Effective Compression",
  paragraph1:
    "Reduce the file size of your PNG images while maintaining optimal quality.",
  subheading2: "User-Friendly Interface",
  paragraph2:
    "Our intuitive interface makes PNG compression quick and simple for all users.",
  subheading3: "Fast Processing",
  paragraph3:
    "Experience swift compression times, allowing you to compress multiple PNG files efficiently.",
  subheading4: "Online Convenience",
  paragraph4:
    "Access our PNG compressor tool online from anywhere, at any time.",
  subheading5: "Versatile Compatibility",
  paragraph5:
    "Our tool supports various PNG file types, ensuring compatibility with your images.",
  paragraph66:
    "Optimize your PNG images for web use, sharing, and more, with a reduced file size of 500KB.",
  Title2: "How It Works",
  subheading6: "Upload PNG File",
  paragraph6:
    "Select the PNG file you wish to compress from your device or cloud storage.",
  subheading7: "Adjust Compression Settings",
  paragraph7:
    "Customize compression settings to achieve the desired file size of 500KB.",
  subheading8: "Initiate Compression",
  paragraph8: "Click the 'Compress' button to start the compression process.",
  paragraph9: "Download the compressed PNG file with a reduced size of 500KB.",
  Title3: "Why Choose Our PNG Compressor?",
  paragraph10:
    "Efficiency: Quickly reduce PNG file sizes to 500KB without compromising quality.",
  paragraph11:
    "Ease of Use: Intuitive interface for seamless compression experience.",
  paragraph12:
    "Speed: Enjoy fast processing times for efficient compression of PNG files.",
  paragraph13:
    "Accessibility: Access our online tool from any device with an internet connection.",
  paragraph14:
    "Compatibility: Support for various PNG file types ensures versatility in compression.",
  paragraph15: "Free: Compress PNG images to 500KB at no cost.",
  subheading9: "Start Compressing PNGs to 500KB Now",
  paragraph16:
    "Begin optimizing your PNG files for web use, sharing, and more.",
  paragraph17:
    "No registration required. Simply upload your PNG file and compress instantly.",
  paragraph18:
    "Efficiently manage your image file sizes with our PNG compressor tool.",
  paragraph19:
    "Need assistance? Contact our support team for prompt help and guidance.",
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
