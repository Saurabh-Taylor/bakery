import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
});

export const metadata: Metadata = {
  title: "Best Bakery in Sofia Fresh Cakes , Pastries & More - Vili Bakery",
  description: "Baked to Perfection, Served with Love",
  // icons:{
  //   icon:"/favicon.ico"
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body
        suppressHydrationWarning={true}
        className={` ${poppins.variable} antialiased min-h-screen`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          {/* <Toaster richColors /> */}
        </Providers>
      </body>
    </html>
  );
}
