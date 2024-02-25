import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import { Toaster as Toaster2 } from "@/components/ui/toaster";
import { Toaster } from "react-hot-toast";
import Navbar from "@components/landingPage/Navbar";
import Footer from "@components/landingPage/Footer";

import GoogleAnalytics from "@components/GoogleAnalytics";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shotune - Create beautiful screenshots and mockups",
  description:
    "Shotune is the ultimate online tool for creating stunning and beautiful screenshots and app mockups. No need to install anything, just use your browser. Customize screenshot backgrounds, margins, roundings, borders and more with Shotune. Export in various formats and share your snaps instantly. Try it for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {process.env.GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.GOOGLE_ANALYTICS} />
        ) : null}
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
