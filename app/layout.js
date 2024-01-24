import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import { Toaster as Toaster2 } from "@/components/ui/toaster";
import { Toaster } from "react-hot-toast";
import Navbar from "@components/landingPage/Navbar";
import Footer from "@components/landingPage/Footer";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shotune - Create beautiful screenshots and mockups",
  description:
    "Shotune is the ultimate online tool for creating stunning and beautiful screenshots and app mockups. No need to install anything, just use your browser. Customize screenshot backgrounds, margins, roundings, borders and more with Shotune. Export in various formats and share your snaps instantly. Try it for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />

        <Script id="ga-script" strategy="lazyOnload">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
        </Script>
      </Head>

      <body>
        <Toaster />
        <Toaster2 />
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
