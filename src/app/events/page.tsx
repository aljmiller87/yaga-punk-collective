import PageBanner from "@/components/PageBanner";
import React from "react";
import FullWidthImageContent from "@/components/FullWidthImageContent";
import { getAllEvents } from "@/utils/events";
import EventsClient from "./EventsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - Yage Punk Collective",
  description:
    "Upcoming shows and events featuring Yage Punk Collective. Charlotte's premier anarchist punk collective performing live music and supporting local communities.",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Yage Punk Collective",
  publisher: "Yage Punk Collective",
  keywords: [
    "Yage Punk Collective Events",
    "YPC Shows",
    "Charlotte Punk Shows",
    "Anarcho Punk Events",
    "Queer Punk Shows",
    "Live Music Charlotte",
    "Punk Rock Events",
  ],
  themeColor: "#0F8185",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://Yagepunkcollective.com/events",
    title: "Events - Yage Punk Collective",
    description:
      "Upcoming shows and events featuring Yage Punk Collective. Charlotte's premier anarchist punk collective performing live music and supporting local communities.",
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
    title: "Events - Yage Punk Collective",
    description:
      "Upcoming shows and events featuring Yage Punk Collective. Charlotte's premier anarchist punk collective performing live music and supporting local communities.",
    images: [
      "https://Yagepunkcollective.com/uploads/images/Yaga-punk-collective-hero.jpg",
    ],
  },
};

const Events = async () => {
  const allEvents = getAllEvents();

  return (
    <div>
      <PageBanner title={"Yage Punk Collective Events"} />
      <EventsClient allEvents={allEvents} />
      <FullWidthImageContent />
    </div>
  );
};

export default Events;
