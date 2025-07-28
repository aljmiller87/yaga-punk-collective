import PageBanner from "@/components/PageBanner";
import React from "react";
import FullWidthImageContent from "@/components/FullWidthImageContent";
import { getAllEvents } from "@/utils/events";
import EventsClient from "./EventsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - Louder Transition Collective",
  description:
    "Upcoming shows and events featuring Louder Transition Collective. Charlotte's premier queer anarcho punk band performing live music and supporting local communities.",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Rebel Rabbit Alex",
  publisher: "Rebel Rabbit Alex",
  keywords: [
    "Louder Transition Events",
    "LTC Shows",
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
    url: "https://wwww.loudertransition.com/events",
    title: "Events - Louder Transition Collective",
    description:
      "Upcoming shows and events featuring Louder Transition Collective. Charlotte's premier queer anarcho punk band performing live music and supporting local communities.",
    siteName: "Louder Transition",
    images: [
      {
        url: "https://wwww.loudertransition.com/public/uploads/images/LTC-logo-w-text.png",
      },
    ],
  },
};

const Events = async () => {
  const allEvents = getAllEvents();

  return (
    <div>
      <PageBanner title={"Louder Transition Events"} />
      <EventsClient allEvents={allEvents} />
      <FullWidthImageContent />
    </div>
  );
};

export default Events;
