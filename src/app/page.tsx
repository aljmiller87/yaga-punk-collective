import { Metadata } from "next";

// Components
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import "../styles/theme.css";
import VideoGallery from "@/components/VideoGallery";
import AudioGallery from "@/components/AudioGallery";
import Link from "next/link";
import sectionStyles from "../components/Section/section.module.scss";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Louder Transition Collective",
  description:
    "A hardcore anarcho-punk band from Charlotte, NC currently looking for like minded punks to join",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  keywords: [],
  themeColor: "#0F8185",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    // url: "https://",
    title: "Louder Transition Collective",
    description:
      "A hardcore anarcho-punk band from Charlotte, NC currently looking for like minded punks to join",
    siteName: "Louder Transition Collective",
    // images: [
    //   {
    //     url: ".jpeg",
    //   },
    // ],
  },
};

export default async function Home() {
  // const {
  //   data: {
  //     pages: { title, bannerImage, bodyText },
  //   },
  // } = await getPageData("NoZen.md");

  return (
    <>
      <Hero />
      <Section>
        <Disclaimer />
      </Section>
      <AudioGallery title="Songs" addCta />
    </>
  );
}
