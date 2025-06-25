import GetInvolvedForm from "@/components/GetInvolvedForm";
import PageBanner from "@/components/PageBanner";
import Section from "@/components/Section";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Louder Transition - Join Us",
  description: "Charlotte Queer Anarcho Punk",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Rebel Rabbit Alex",
  publisher: "Rebel Rabbit Alex",

  keywords: [],
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
          please contact us. We're looking for help on a few fronts
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
