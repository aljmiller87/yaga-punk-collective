import { Metadata } from "next";

// Components
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import "../styles/theme.css";
import VideoGallery from "@/components/VideoGallery";
import AudioGallery from "@/components/AudioGallery";
import Link from "next/link";
import sectionStyles from "../components/Section/section.module.scss";

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
        <p className={sectionStyles.large}>
          Louder Transition Collective is a hardcore anarcho-punk band from
          Charlotte, NC. The project was recently started by{" "}
          <Link href={"/members"}>Rebel Rabbit Alex</Link> who is looking for a
          guitarist, bassist, and drummer to join. Currently, all bass, guitar,
          and vocals are produced by Rebel who has the hope others will join to
          not only make new songs, but also improve the ones already in
          existence.
        </p>
        <p>&nbsp;</p>
        <h3>Disclaimer:</h3>
        <p className={sectionStyles.large}>
          You&apos;ll notice that the songs as the exist are not demo ready. For
          one, they are lacking drum tracks which are beyond Rebel&apos;s
          ability. Their current state is only a reflection of the sound and
          direction Rebel would like to take the band.
        </p>
      </Section>
      <AudioGallery title="Songs" addCta />
    </>
  );
}
