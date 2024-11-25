import { Metadata } from "next";

// Components
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import "../styles/theme.css";
import VideoGallery from "@/components/VideoGallery";
import AudioGallery from "@/components/AudioGallery";

export const metadata: Metadata = {
  title: "starter template",
  description: "DESCRIPTION",
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
    title: "STARTER TEMPLATE",
    description: "STARTER TEMPLATE",
    siteName: "STARTER TEMPLATE",
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
      <Section> {/* <TinaMarkdown content={bodyText} /> */}</Section>
      {/* <ImageWithGradient /> */}
      {/* <EndorsementsCarousel /> */}
      <AudioGallery title="Songs" addCta />
    </>
  );
}
