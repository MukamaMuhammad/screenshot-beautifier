import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import { Toaster as Toaster2 } from "@/components/ui/toaster";
import { Toaster } from "react-hot-toast";
import Navbar from "@components/landingPage/Navbar";
import Footer from "@components/landingPage/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hiring Ugandan",
  description: "Find Your Next Job Here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
