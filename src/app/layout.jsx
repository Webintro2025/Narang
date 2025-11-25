import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappIcon from "@/components/WhatsappIcon";
import Sendme from "@/components/Sendme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Narang Steel | MS Bright Square Bars & Metal Products",
  description:
    "Narang Steel is a trusted supplier of MS Bright Square Bars, MS bright bars, brass products, EN1A bright bars, MS wire coils and rods for fabrication, construction, automotive, and engineering applications across India.",
  keywords:[
    "Narang Steel, MS Bright Square Bars, MS Bright Square Bar Suppliers in India, Mild Steel Bright Bars, MS Bright Hex Bar, Brass Sheets, Brass Flats, Brass Hex Bar, Brass Pipes, Brass Round Bars, EN1A Leaded Free Cutting Bright Bars, MS Wire Coils, MS Wire Rods, metal suppliers in India"],
     verification: {
      google: "BJ2NcCuzcYfKOIf4wo98IFohRGu-1Wn-dwk-eswBs38", // ← Yeh line important hai
    }, 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Navbar />
        <Sendme />
        <WhatsappIcon />
        {children}
        <Footer />
      </body>
    </html>
  );
}
