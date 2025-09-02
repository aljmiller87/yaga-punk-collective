import GetInvolvedForm from "@/components/GetInvolvedForm";
import PageBanner from "@/components/PageBanner";
import Section from "@/components/Section";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Join Us - Yaga Punk Collective",
  description:
    "Join Yaga Punk Collective! We're seeking musicians, graphic designers, promoters, and mutual aid liaisons to help grow Charlotte's anarchist punk community.",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Yaga Punk Collective",
  publisher: "Yaga Punk Collective",
  keywords: [
    "Join Yaga Punk Collective",
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
    url: "https://yagapunkcollective.com/join-us",
    title: "Join Us - Yaga Punk Collective",
    description:
      "Join Yaga Punk Collective! We're seeking musicians, graphic designers, promoters, and mutual aid liaisons to help grow Charlotte's anarchist punk community.",
    siteName: "Yaga Punk Collective",
    images: [
      {
        url: "https://yagapunkcollective.com/uploads/images/yaga-punk-collective-hero.jpg",
        width: 1200,
        height: 1200,
        alt: "Yaga Punk Collective Logo - Anarchist Punk Collective",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Us - Yaga Punk Collective",
    description:
      "Join Yaga Punk Collective! We're seeking musicians, graphic designers, promoters, and mutual aid liaisons to help grow Charlotte's anarchist punk community.",
    images: [
      "https://yagapunkcollective.com/uploads/images/yaga-punk-collective-hero.jpg",
    ],
  },
};

const JoinUs = () => {
  return (
    <>
      <PageBanner title={"Join the Yaga Punk Collective"} />
      <Section>
        <h2>Currently Seeking guitarist and other help</h2>
        <p>
          Looking for a raw, aggressive guitarist to join our anarcho punk
          band—no egos, just noise and message. Must be into DIY ethics,
          anti-authoritarian politics, and playing fast, loud, and
          unapologetically. We rehearse weekly and gig monthly—gear, passion,
          and commitment a must. If you&apos;re ready to shred and scream for
          change, hit us up.
        </p>
        <p>
          If there are other ways you would like to get involved with the band,
          please contact us. We&apos;re looking for help on a few fronts
        </p>
        <ul>
          <li>production</li>
          <li>graphic design</li>
          <li>promotion</li>
          <li>mutual aid group liasons</li>
        </ul>
      </Section>
      <Section>
        <h3>
          Fill out the form below if you&apos;d like to get involved in ANY
          capacity
        </h3>

        <GetInvolvedForm />
      </Section>
    </>
  );
};

export default JoinUs;
