import GetInvolvedForm from "@/components/GetInvolvedForm";
import PageBanner from "@/components/PageBanner";
import Section from "@/components/Section";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Join Us - Yage Punk Collective",
  description:
    "Join Yage Punk Collective! We're seeking musicians, graphic designers, promoters, and mutual aid liaisons to help grow Charlotte's anarchist punk community.",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Yage Punk Collective",
  publisher: "Yage Punk Collective",
  keywords: [
    "Join Yage Punk Collective",
    "YPC Membership",
    "Charlotte Punk Community",
    "Anarchist Musicians",
    "Punk Band Members",
    "DIY Community",
    "Mutual Aid",
  ],
  themeColor: "#0F8185",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://Yagepunkcollective.com/join-us",
    title: "Join Us - Yage Punk Collective",
    description:
      "Join Yage Punk Collective! We're seeking musicians, graphic designers, promoters, and mutual aid liaisons to help grow Charlotte's anarchist punk community.",
    siteName: "Yage Punk Collective",
    images: [
      {
        url: "https://Yagepunkcollective.com/uploads/images/Yaga-punk-collective-hero.jpg",
        width: 1200,
        height: 1200,
        alt: "Yage Punk Collective Logo - Anarchist Punk Collective",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Us - Yage Punk Collective",
    description:
      "Join Yage Punk Collective! We're seeking musicians, graphic designers, promoters, and mutual aid liaisons to help grow Charlotte's anarchist punk community.",
    images: [
      "https://Yagepunkcollective.com/uploads/images/Yaga-punk-collective-hero.jpg",
    ],
  },
};

const JoinUs = () => {
  return (
    <>
      <PageBanner title={"Join the Yage Punk Collective"} />
      <Section>
        <h2>WHAT DO YOU WANT HERE?</h2>
      </Section>
    </>
  );
};

export default JoinUs;
