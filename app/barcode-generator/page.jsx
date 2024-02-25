import React from "react";
import Barcode from "@components/tools/Barcode/page";
import CompressorsContent from "@components/tools/CompressorsContent/page";

export const metadata = {
  title: "Bulk Barcode Generator",
  description:
    "Generate barcodes in bulk with our bulk barcode generator. Our tool is fast, easy to use, and can generate barcodes in multiple formats. Whether you need to generate barcodes for inventory management, asset tracking, or any other purpose, our bulk barcode generator has you covered. Try it today and see how easy it is to generate barcodes in bulk!",
};

const copy = {
  Title: "Bulk Barcode Generator",
  paragraph:
    "Generate multiple barcodes quickly and easily with our bulk barcode generator.",
  heading: "Key Features",
  subheading1: "Batch Barcode Generation",
  paragraph1:
    "Create barcodes in bulk with just a few clicks, saving you time and effort.",
  subheading2: "Customizable Options",
  paragraph2:
    "Customize barcode settings such as type, size, color, and format to suit your needs.",
  subheading3: "Free to Use",
  paragraph3:
    "Our bulk barcode generator is completely free to use, with no hidden fees or subscriptions.",
  subheading4: "User-Friendly Interface",
  paragraph4:
    "Easily navigate through our intuitive interface to generate barcodes effortlessly.",
  subheading5: "Cross-Platform Compatibility",
  paragraph5:
    "Our generator works seamlessly on all devices, whether you're on a computer, tablet, or smartphone.",
  paragraph66:
    "Generate barcodes for a variety of purposes, including inventory management, product labeling, shipping, and more.",
  Title2: "How It Works",
  subheading6: "Input Your Data",
  paragraph6:
    "Enter the data you want to encode into barcodes or upload a data file containing the information.",
  subheading7: "Customize Settings",
  paragraph7:
    "Adjust barcode settings such as type, size, color, and format to match your preferences.",
  subheading8: "Generate Barcodes",
  paragraph8:
    "Click the generate button to create your barcodes in bulk instantly.",
  paragraph9: "Download and use your barcodes wherever you need them.",
  Title3: "Why Choose Our Bulk Barcode Generator?",
  paragraph10: "Efficiency: Save time by generating multiple barcodes at once.",
  paragraph11:
    "Customization: Customize barcode settings to match your branding or preferences.",
  paragraph12:
    "Ease of Use: Our user-friendly interface makes barcode generation simple and hassle-free.",
  paragraph13:
    "Cross-Platform Compatibility: Access our generator from any device with internet access.",
  paragraph14:
    "Free to Use: Enjoy our bulk barcode generator for free with no limitations.",
  paragraph15:
    "Versatility: Use barcodes for various purposes, including inventory management, product labeling, and more.",
  subheading9: "Get Started Now",
  paragraph16:
    "Start generating barcodes in bulk for free with our easy-to-use tool.",
  paragraph17:
    "No sign-up required. Simply input your data and create your barcodes instantly.",
  paragraph18:
    "Effortlessly manage your barcode generation process with our intuitive interface.",
  paragraph19:
    "Have questions or need assistance? Contact our support team for help.",
};

const page = () => {
  return (
    <div className="container mx-auto">
      <Barcode />
      <section class=" body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 ">
              Bulk Barcode generator - Fast, Efficient, and Secure
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-slate-200">
              Empower your business with our Bulk Barcode Generator, an ideal
              solution for efficiently generating barcodes in large quantities.
              Our user-friendly interface ensures a seamless experience,
              allowing you to swiftly create barcodes for all your products.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl  font-medium title-font mb-2">
                Customizable Barcodes
              </h2>
              <p class="leading-relaxed text-base text-slate-200 mb-4">
                Unlock customization options with our Bulk Barcode Generator,
                tailoring barcodes to meet your specific requirements. Choose
                from a range of barcode types such as Code 128, UPC, and EAN.
                Customize size and color to align with your brand identity.
              </p>
            </div>
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl  font-medium title-font mb-2">
                Easy Integration
              </h2>
              <p class="leading-relaxed text-base text-slate-200 mb-4">
                Integrate our Bulk Barcode Generator effortlessly into your
                workflow. Import data seamlessly from a CSV file or connect
                directly to your database for automatic barcode generation.
              </p>
            </div>
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl  font-medium title-font mb-2">
                High-Quality Barcodes
              </h2>
              <p class="leading-relaxed text-base text-slate-200 mb-4">
                Experience top-notch barcode quality with our Bulk Barcode
                Generator, employing cutting-edge technology. Advanced
                algorithms guarantee barcodes that are easily scannable and
                readable, even at high speeds.
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
