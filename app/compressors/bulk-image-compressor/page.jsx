import React from "react";
import ImageCompressor from "@components/tools/ImageCompressor/page";
import CompressorsContent from "@components/tools/CompressorsContent/page";

export const metadata = {
  title: "Bulk Image Compressor - Unlimited images, all at once",
  description:
    "Bulk Image Compressor online. Quickly compress unlimited images in bulk online. No uploading. No Signup. Fast batch compress",
};

const copy = {
  Title: "Bulk Image Generator",
  paragraph:
    "Generate multiple images quickly and easily with our bulk image generator.",
  heading: "Key Features",
  subheading1: "Efficient Image Compression",
  paragraph1:
    "Compress images without losing quality to reduce file sizes and save storage space.",
  subheading2: "User-Friendly Interface",
  paragraph2:
    "Our intuitive interface makes it easy to generate images in bulk with just a few clicks.",
  subheading3: "Cross-Platform Compatibility",
  paragraph3:
    "Our image generator works seamlessly on all devices, whether you're on a computer, tablet, or smartphone.",
  subheading4: "Customizable Options",
  paragraph4:
    "Customize image settings such as format, size, and resolution to suit your needs.",
  subheading5: "Free to Use",
  paragraph5:
    "Enjoy our bulk image generator for free with no hidden fees or subscriptions.",
  paragraph66:
    "Generate images for various purposes, including web usage, social media sharing, and email attachments.",
  Title2: "How It Works",
  subheading6: "Upload Your Images",
  paragraph6:
    "Upload your images or select them from your device to begin the bulk generation process.",
  subheading7: "Customize Settings",
  paragraph7:
    "Adjust image settings such as format, size, and resolution according to your preferences.",
  subheading8: "Generate Images",
  paragraph8:
    "Click the generate button to create your images in bulk instantly.",
  paragraph9: "Download and use your images wherever you need them.",
  Title3: "Why Choose Our Bulk Image Generator?",
  paragraph10: "Efficiency: Save time by generating multiple images at once.",
  paragraph11:
    "Customization: Customize image settings to match your branding or preferences.",
  paragraph12:
    "Ease of Use: Our user-friendly interface makes image generation simple and hassle-free.",
  paragraph13:
    "Cross-Platform Compatibility: Access our generator from any device with internet access.",
  paragraph14:
    "Free to Use: Enjoy our bulk image generator for free with no limitations.",
  paragraph15:
    "Versatility: Use generated images for various purposes, including web design, social media, and marketing materials.",
  subheading9: "Get Started Now",
  paragraph16:
    "Start generating images in bulk for free with our easy-to-use tool.",
  paragraph17:
    "No sign-up required. Simply upload your images and create your images instantly.",
  paragraph18:
    "Effortlessly manage your image generation process with our intuitive interface.",
  paragraph19:
    "Have questions or need assistance? Contact our support team for help.",
};

const page = () => {
  return (
    <div className="container mx-auto">
      <ImageCompressor />
      <section class="body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 ">
              Bulk Image Compressor - Fast, Efficient, and Secure
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-slate-200">
              Drag n Drop images and Compress away! No uploading. No signup.
              Reduce size of images in bulk. Compress unlimited images online at
              once. Your photos are your property and stay on your machine.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl font-medium title-font mb-2">
                How to reduce image size from MBs to KBs with JPG KB Reducer?
              </h2>
              <p class="leading-relaxed text-base mb-4 text-slate-200">
                JPG KB Reducer offers various options to compress JPGs and PNGs.
                Simply drop all images in the dropbox, select the target size in
                KBs, and get your new images with reduced sizes without losing
                quality.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl font-medium title-font mb-2">
                How to compress images efficiently?
              </h2>
              <p class="leading-relaxed text-base mb-4 text-slate-200">
                Drop as many images or photos in the dropbox. Click Start
                Compressing, and voila! Your images are compressed efficiently.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl font-medium title-font mb-2">
                How to compress JPG and PNG images without quality loss?
              </h2>
              <p class="leading-relaxed text-base mb-4 text-slate-200">
                Bulk compress images of various types: JPG, JPEG, PNG, BMP
                images. Transparent images will maintain transparency. We are
                continually working to enhance this feature.
              </p>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl font-medium title-font mb-2">
                How to compress multiple images at once with Mass Image
                Compressor?
              </h2>
              <p class="leading-relaxed text-base mb-4 text-slate-200">
                Mass Image Compressor can batch compress multiple images
                simultaneously. Drop a massive number of images, and get
                compressed images efficiently, often reducing from MBs to KBs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CompressorsContent copy={copy} />
    </div>
  );
};

export default page;
