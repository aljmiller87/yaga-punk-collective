import { Metadata } from "next";

// Components
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import AudioGallery from "@/components/AudioGallery";
import Disclaimer from "@/components/Disclaimer";
import "../styles/theme.css";

export const metadata: Metadata = {
  title: "Louder Transition Collective",
  description: "Charlotte Queer Anarcho Punk",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Rebel Rabbit Alex",
  publisher: "Rebel Rabbit Alex",

  keywords: [
    "Louder Transition",
    "Louder Transition Collective",
    "Anarchist punk band",
    "anarcho punk band",
    "hardcore punk band",
  ],
  themeColor: "#292929",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://wwww.loudertransition.com",
    title: "Louder Transition Collective",
    description: "Charlotte Queer Anarcho Punk",
    siteName: "Louder Transition",
    images: [
      {
        url: "https://wwww.loudertransition.com/uploads/images/LTC-logo-w-text.png",
        width: 1200,
        height: 1200,
        alt: "Louder Transition Collective Logo - Anarcho Punk Band",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Louder Transition Collective",
    description: "Charlotte Queer Anarcho Punk",
    images: [
      "https://wwww.loudertransition.com/uploads/images/LTC-logo-w-text.png",
    ],
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
      {/* <AudioGallery title="Demos - In Progress" addCta /> */}
    </>
  );
}
