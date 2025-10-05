import React from "react";
import { Metadata } from "next";
import GetInvolvedForm from "@/components/GetInvolvedForm";
import PageBanner from "@/components/PageBanner";
import PageSummary from "@/components/PageSummary";
import Section from "@/components/Section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../../tina/__generated__/client";

// Generate metadata from TinaCMS content
export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await client.queries.joinUsPage({
      relativePath: "index.md",
    });

    const content = data.joinUsPage;
    const metadata = content.metadata;

    return {
      title: metadata?.title || "Join Us - Yage Punk Collective",
      description:
        metadata?.description ||
        "Join Yage Punk Collective! We're seeking musicians, graphic designers, promoters, and mutual aid liaisons to help grow Charlotte's anarchist punk community.",
      authors: {
        name: "Yage Punk Collective",
      },
      creator: "Yage Punk Collective",
      publisher: "Yage Punk Collective",
      keywords: metadata?.keywords?.split(",").map((k: string) => k.trim()) || [
        "Join Yage Punk Collective",
        "YPC Membership",
      ],
      themeColor: "#0F8185",
      robots: { index: true, follow: true },
      openGraph: {
        type: "website",
        url: "https://Yagepunkcollective.com/join-us",
        title: metadata?.title || "Join Us - Yage Punk Collective",
        description:
          metadata?.description ||
          "Join Yage Punk Collective! We're seeking musicians, graphic designers, promoters, and mutual aid liaisons to help grow Charlotte's anarchist punk community.",
        siteName: "Yage Punk Collective",
        images: metadata?.ogImage
          ? [
              {
                url: metadata.ogImage,
                width: 1200,
                height: 1200,
                alt: "Join Yage Punk Collective",
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: metadata?.title || "Join Us - Yage Punk Collective",
        description:
          metadata?.description ||
          "Join Yage Punk Collective! We're seeking musicians, graphic designers, promoters, and mutual aid liaisons to help grow Charlotte's anarchist punk community.",
        images: metadata?.ogImage ? [metadata.ogImage] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Join Us - Yage Punk Collective",
      description:
        "Join Yage Punk Collective! We're seeking musicians, graphic designers, promoters, and mutual aid liaisons to help grow Charlotte's anarchist punk community.",
    };
  }
}

const JoinUs = async () => {
  let joinUsPageContent;
  try {
    const response = await client.queries.joinUsPage({
      relativePath: "index.md",
    });
    joinUsPageContent = response.data.joinUsPage;
  } catch (error) {
    console.error("Error fetching join us page content:", error);
    return (
      <div>
        <PageBanner title="Join the Yage Punk Collective" />
        <p>
          Content not found. Please create the joinUsPage content in TinaCMS.
        </p>
      </div>
    );
  }

  return (
    <>
      <PageBanner
        title={joinUsPageContent.title || "Join the Yage Punk Collective"}
      />
      <PageSummary summary={joinUsPageContent.summary} />
      {joinUsPageContent.content && (
        <Section>
          <TinaMarkdown content={joinUsPageContent.content} />
        </Section>
      )}
    </>
  );
};

export default JoinUs;
