import { Metadata } from "next";
import FullWidthImageContent from "@/components/FullWidthImageContent";
import Hero from "@/components/Hero";
import MeetEmma from "@/views/home/MeetEmma";
import Issues from "@/views/home/issues";
import "../styles/theme.css";

export const metadata: Metadata = {
  title: "Emma Curtis for Council",
  description: "Emma Curtis is running for Lexington's 4th Council District",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  keywords: [
    "Emma Curtis",
    "Lexington-Fayette Urban County",
    "Lexington council",
    "Lexington election",
    "Kentucky election",
    "Kentucky local election",
  ],
  themeColor: "#0F8185",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://emmaforlex.com",
    title: "Emma Curtis for Council",
    description: "Emma Curtis is running for Lexington's 4th Council District",
    siteName: "Emma Curtis for Council",
    images: [
      {
        url: "/assets/images/hero-headshot.jpeg",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <MeetEmma />
      <FullWidthImageContent />
      <Issues />
    </>
  );
}
