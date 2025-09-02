import PageBanner from "@/components/PageBanner";
import React from "react";
import FullWidthImageContent from "@/components/FullWidthImageContent";
import { getAllEvents } from "@/utils/events";
import EventsClient from "./EventsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - Yaga Punk Collective",
  description:
    "Upcoming shows and events featuring Yaga Punk Collective. Charlotte's premier anarchist punk collective performing live music and supporting local communities.",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Yaga Punk Collective",
  publisher: "Yaga Punk Collective",
  keywords: [
    "Yaga Punk Collective Events",
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
    url: "https://yagapunkcollective.com/events",
    title: "Events - Yaga Punk Collective",
    description:
      "Upcoming shows and events featuring Yaga Punk Collective. Charlotte's premier anarchist punk collective performing live music and supporting local communities.",
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
    title: "Events - Yaga Punk Collective",
    description:
      "Upcoming shows and events featuring Yaga Punk Collective. Charlotte's premier anarchist punk collective performing live music and supporting local communities.",
    images: [
      "https://yagapunkcollective.com/uploads/images/yaga-punk-collective-hero.jpg",
    ],
  },
};

const Events = async () => {
  const allEvents = getAllEvents();

  return (
    <div>
      <PageBanner title={"Yaga Punk Collective Events"} />
      <EventsClient allEvents={allEvents} />
      <FullWidthImageContent />
    </div>
  );
};

export default Events;
