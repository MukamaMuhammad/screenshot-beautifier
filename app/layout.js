import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import { Toaster as Toaster2 } from "@/components/ui/toaster";
import { Toaster } from "react-hot-toast";
import Navbar from "@components/landingPage/Navbar";
import Footer from "@components/landingPage/Footer";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Shotune || Online screenshot editor and Screenshot Background Generator",
  description:
    "Shotune is the ultimate online tool for creating stunning and beautiful screenshots and app mockups. No need to install anything, just use your browser. Customize screenshot backgrounds, margins, roundings, borders and more with Shotune. Export in various formats and share your snaps instantly. Try it for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          defer
          data-domain="shotune.com"
          src="https://plausible.io/js/script.js"
        ></script>
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
