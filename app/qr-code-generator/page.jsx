import React from "react";
import Qrcode from "@components/tools/Qrcode/page";
import CompressorsContent from "@components/tools/CompressorsContent/page";

export const metadata = {
  title: "Bulk Qr Code Generator",
  description:
    "Generate multiple QR codes at once with our bulk QR code generator. Our tool is fast, easy to use, and can generate thousands of QR codes in multiple formats. Whether you need to generate QR codes for inventory management, asset tracking, or any other purpose, our bulk QR code generator has you covered. Try it today and see how easy it is to generate QR codes in bulk!",
};

const copy = {
  Title: "Bulk QR Code Generator",
  paragraph:
    "Generate multiple QR codes quickly and easily with our bulk QR code generator.",
  heading: "Key Features",
  subheading1: "Batch QR Code Generation",
  paragraph1:
    "Create QR codes in bulk with just a few clicks, saving you time and effort.",
  subheading2: "Customizable Options",
  paragraph2:
    "Customize QR code settings such as size, color, and format to suit your needs.",
  subheading3: "Free to Use",
  paragraph3:
    "Our bulk QR code generator is completely free to use, with no hidden fees or subscriptions.",
  subheading4: "User-Friendly Interface",
  paragraph4:
    "Easily navigate through our intuitive interface to generate QR codes effortlessly.",
  subheading5: "Cross-Platform Compatibility",
  paragraph5:
    "Our generator works seamlessly on all devices, whether you're on a computer, tablet, or smartphone.",
  paragraph66:
    "Generate QR codes for a variety of purposes, including marketing campaigns, event tickets, product packaging, and more.",
  Title2: "How It Works",
  subheading6: "Upload Your Data",
  paragraph6:
    "Upload your data file containing the information you want to encode into QR codes.",
  subheading7: "Customize Settings",
  paragraph7:
    "Adjust QR code settings such as size, color, and format to match your preferences.",
  subheading8: "Generate QR Codes",
  paragraph8:
    "Click the generate button to create your QR codes in bulk instantly.",
  paragraph9: "Download and use your QR codes wherever you need them.",
  Title3: "Why Choose Our Bulk QR Code Generator?",
  paragraph10: "Efficiency: Save time by generating multiple QR codes at once.",
  paragraph11:
    "Customization: Customize QR code settings to match your branding or preferences.",
  paragraph12:
    "Ease of Use: Our user-friendly interface makes QR code generation simple and hassle-free.",
  paragraph13:
    "Cross-Platform Compatibility: Access our generator from any device with internet access.",
  paragraph14:
    "Free to Use: Enjoy our bulk QR code generator for free with no limitations.",
  paragraph15:
    "Versatility: Use QR codes for various purposes, including marketing, inventory management, and more.",
  subheading9: "Get Started Now",
  paragraph16:
    "Start generating QR codes in bulk for free with our easy-to-use tool.",
  paragraph17:
    "No sign-up required. Simply upload your data and create your QR codes instantly.",
  paragraph18:
    "Effortlessly manage your QR code generation process with our intuitive interface.",
  paragraph19:
    "Have questions or need assistance? Contact our support team for help.",
};

const page = () => {
  return (
    <div className="container mx-auto">
      <Qrcode />
      <section class=" body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 ">
              Bulk Qr Code generator - Fast, Efficient, and Secure
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-slate-200">
              Our Bulk Qr Code Generator is the perfect solution for businesses
              that need to generate Qr Codes in bulk. With our easy-to-use
              interface, you can quickly and easily create Qr Codes for all of
              your products.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl  font-medium title-font mb-2">
                Customizable Qr Codes
              </h2>
              <p class="leading-relaxed text-base text-slate-200 mb-4">
                Our Bulk Qr Code Generator allows you to customize your Qr Codes
                to fit your needs. You can choose from a variety of Qr Code
                types, including Code 128, UPC, and EAN. You can also customize
                the size and color of your Qr Codes to match your branding.
              </p>
            </div>
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl  font-medium title-font mb-2">
                Easy Integration
              </h2>
              <p class="leading-relaxed text-base text-slate-200 mb-4">
                Our Bulk Qr Code Generator is designed to be easy to integrate
                into your existing workflow. You can easily import your data
                from a CSV file or connect to your database to generate Qr Codes
                automatically.
              </p>
            </div>
            <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl  font-medium title-font mb-2">
                High-Quality Qr Codes
              </h2>
              <p class="leading-relaxed text-base text-slate-200 mb-4">
                Our Bulk Qr Code Generator uses the latest technology to ensure
                that your Qr Codes are of the highest quality. We use advanced
                algorithms to generate Qr Codes that are easy to scan and read,
                even at high speeds.
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
