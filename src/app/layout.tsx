import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/theme.css";
import Header from "@/components/Header";
import Head from "next/head";
import Footer from "@/components/Footer";
import UtilityHeader from "@/components/UtilityHeader";
import FullWidthImageContent from "@/components/FullWidthImageContent";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head></Head> */}
      <body className={`${inter.className} `}>
        <UtilityHeader />
        <Header />
        <main>{children}</main>
        {/* <FullWidthImageContent /> */}
        <Footer />
      </body>
    </html>
  );
}
