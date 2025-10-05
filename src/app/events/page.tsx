import PageBanner from "@/components/PageBanner";
import PageSummary from "@/components/PageSummary";
import React from "react";
import FullWidthImageContent from "@/components/FullWidthImageContent";
import { getAllEvents } from "@/utils/events";
import EventsClient from "./EventsClient";
import { Metadata } from "next";
import client from "../../../tina/__generated__/client";

// Generate metadata from TinaCMS content
export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await client.queries.eventsPage({
      relativePath: "index.md",
    });

    const content = data.eventsPage;
    const metadata = content.metadata;

    return {
      title: metadata?.title || "Events - Yage Punk Collective",
      description:
        metadata?.description ||
        "Upcoming shows and events featuring Yage Punk Collective.",
      authors: {
        name: "Yage Punk Collective",
      },
      creator: "Yage Punk Collective",
      publisher: "Yage Punk Collective",
      keywords: metadata?.keywords?.split(",").map((k: string) => k.trim()) || [
        "Yage Punk Collective Events",
        "Punk Shows",
      ],
      themeColor: "#0F8185",
      robots: { index: true, follow: true },
      openGraph: {
        type: "website",
        url: "https://Yagepunkcollective.com/events",
        title: metadata?.title || "Events - Yage Punk Collective",
        description:
          metadata?.description ||
          "Upcoming shows and events featuring Yage Punk Collective.",
        siteName: "Yage Punk Collective",
        images: metadata?.ogImage
          ? [
              {
                url: metadata.ogImage,
                width: 1200,
                height: 1200,
                alt: "Yage Punk Collective Events",
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: metadata?.title || "Events - Yage Punk Collective",
        description:
          metadata?.description ||
          "Upcoming shows and events featuring Yage Punk Collective.",
        images: metadata?.ogImage ? [metadata.ogImage] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Events - Yage Punk Collective",
      description: "Upcoming shows and events featuring Yage Punk Collective.",
    };
  }
}

const Events = async () => {
  const allEvents = getAllEvents();

  let eventsPageContent;
  try {
    const response = await client.queries.eventsPage({
      relativePath: "index.md",
    });
    eventsPageContent = response.data.eventsPage;
  } catch (error) {
    console.error("Error fetching events page content:", error);
    eventsPageContent = { title: "Yage Punk Collective Events", summary: null };
  }

  return (
    <div>
      <PageBanner
        title={eventsPageContent.title || "Yage Punk Collective Events"}
      />
      <PageSummary summary={eventsPageContent.summary} />
      <EventsClient allEvents={allEvents} />
    </div>
  );
};

export default Events;
