import GetInvolvedForm from "@/components/GetInvolvedForm";
import PageBanner from "@/components/PageBanner";
import Section from "@/components/Section";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Join Us - Louder Transition Collective",
  description:
    "Join Louder Transition Collective! We're seeking musicians, graphic designers, promoters, and mutual aid liaisons to help grow Charlotte's queer anarcho punk community.",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Rebel Rabbit Alex",
  publisher: "Rebel Rabbit Alex",
  keywords: [
    "Join Louder Transition",
    "LTC Band Members",
    "Charlotte Punk Musicians",
    "Anarcho Punk Community",
    "Queer Punk Band",
    "DIY Punk Music",
    "Punk Rock Volunteers",
    "Mutual Aid Groups",
  ],
  themeColor: "#0F8185",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://wwww.loudertransition.com/join-us",
    title: "Join Us - Louder Transition Collective",
    description:
      "Join Louder Transition Collective! We're seeking musicians, graphic designers, promoters, and mutual aid liaisons to help grow Charlotte's queer anarcho punk community.",
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
    title: "Join Us - Louder Transition Collective",
    description:
      "Join Louder Transition Collective! We're seeking musicians, graphic designers, promoters, and mutual aid liaisons to help grow Charlotte's queer anarcho punk community.",
    images: [
      "https://wwww.loudertransition.com/uploads/images/LTC-logo-w-text.png",
    ],
  },
};

const JoinUs = () => {
  return (
    <>
      <PageBanner title={"Join the Louder Transition"} />
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
