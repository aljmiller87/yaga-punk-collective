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
  title: "Emma Curtis for Council",
  description: "Emma Curtis is running for Lexington's 4th Council District",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  keywords: [
    "Lexington-Fayette Urban County",
    "Lexington council",
    "Lexington election",
    "Kentucky election",
    "Kentucky local election",
    "Emma Curtis",
    "Emma lee curtis",
    "Emma kentucky",
    "Emma lexington",
    "Emma transgender kentucky",
    "Lexington election",
    "Lexington city council",
    "Lexington Council",
    "Transgender kentucky",
    "Lexington city council",
    "Emma for kentucky",
    "Brenda Monarrez",
    "Monarrez for lexington",
    "Monarrez4lex",
    "Brack Marquette",
    "Brack for council",
    "Vote4brack",
    "Council district 4",
    "District 4",
    "Lexington district 4",
    "Lexington Council district 4",
    "Lexington Council democrat",
    "District 4 democrat",
    "Transgender candidate",
    "Trans candidate",
    "Transgender council candidate",
    "Trans council candidate",
    "Kentucky transgender candidate",
    "Kentucky trans candidate",
    "Ky transgender candidate",
    "Ky trans candidate",
    "Forward together",
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
        url: "https://main--emma-for-council.netlify.app/assets/images/hero-headshot.jpeg",
      },
    ],
  },
};

export default async function Home() {
  const {
    data: {
      pages: { title, bannerImage, bodyText },
    },
  } = await getPageData("Homepage.md");

  return (
    <>
      <Hero title={title} bannerImage={bannerImage} />
      <Section>
        {" "}
        <TinaMarkdown content={bodyText} />
      </Section>
      <ImageWithGradient />
      <EndorsementsCarousel />
      <Section>
        <h2 style={{ margin: "0 0 3rem", textAlign: "center" }}>
          On the Issues
        </h2>
        <Issues />
      </Section>
    </>
  );
}
