import { Metadata } from "next";

// Components
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import AudioGallery from "@/components/AudioGallery";
import Disclaimer from "@/components/Disclaimer";
import "../styles/theme.css";

export const metadata: Metadata = {
  title: "Louder Transition",
  description: "Charlotte Queer Anarcho Punk",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Rebel Rabbit Alex",
  publisher: "Rebel Rabbit Alex",

  keywords: [
    "Louder Transition",
    "Anarchist punk band",
    "anarcho punk band",
    "hardcore punk band",
  ],
  themeColor: "#0F8185",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://wwww.loudertransition.com",
    title: "Louder Transition",
    description: "Charlotte Queer Anarcho Punk",
    siteName: "Louder Transition",
    // images: [
    //   {
    //     url: ".jpeg",
    //   },
    // ],
  },
};

export default async function Home() {
  return (
    <>
      <Hero />
      {/* <Section>
        <Disclaimer />
      </Section> */}
      <AudioGallery title="Demos - In Progress" addCta />
    </>
  );
}
