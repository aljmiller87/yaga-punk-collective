import { Metadata } from "next";
import { TinaMarkdown } from "tinacms/dist/rich-text";

// Components
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Issues from "@/components/Issues";
import ImageWithGradient from "@/components/ImageWithGradient";
import "../styles/theme.css";
import { getPageData } from "./utils";
import EndorsementsCarousel from "@/components/Endorsements/Carousel";

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
  const {
    data: {
      pages: { title, bannerImage, bodyText },
    },
  } = await getPageData("NoZen.md");

  return (
    <>
      <Hero title={title} bannerImage={bannerImage} />
      <Section> {/* <TinaMarkdown content={bodyText} /> */}</Section>
      {/* <ImageWithGradient /> */}
      {/* <EndorsementsCarousel /> */}
      <Section>
        <h2 style={{ margin: "0 0 3rem", textAlign: "center" }}>
          On the Issues
        </h2>
        {/* <Issues /> */}
      </Section>
    </>
  );
}
