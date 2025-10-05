import React from "react";
import { Metadata } from "next";
import { getAllZineReleases } from "@/utils/zines";
import PageBanner from "@/components/PageBanner";
import PageSummary from "@/components/PageSummary";
import CopyAndImage from "@/components/CopyAndImage";
import Button from "@/components/Button";
import Section from "@/components/Section";
import client from "../../../tina/__generated__/client";

// Generate metadata from TinaCMS content
export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await client.queries.zinePage({
      relativePath: "index.md",
    });

    const content = data.zinePage;
    const metadata = content.metadata;

    return {
      title: metadata?.title || "Zine Releases - Yage Punk Collective",
      description:
        metadata?.description ||
        "Explore our DIY zine releases featuring punk culture, radical politics, and underground art.",
      authors: {
        name: "Yage Punk Collective",
      },
      creator: "Yage Punk Collective",
      publisher: "Yage Punk Collective",
      keywords: metadata?.keywords?.split(",").map((k: string) => k.trim()) || [
        "Punk Zines",
        "DIY Zines",
      ],
      themeColor: "#0F8185",
      robots: { index: true, follow: true },
      openGraph: {
        type: "website",
        url: "https://Yagepunkcollective.com/zine",
        title: metadata?.title || "Zine Releases - Yage Punk Collective",
        description:
          metadata?.description ||
          "Explore our DIY zine releases featuring punk culture, radical politics, and underground art.",
        siteName: "Yage Punk Collective",
        images: metadata?.ogImage
          ? [
              {
                url: metadata.ogImage,
                width: 1200,
                height: 1200,
                alt: "Yage Punk Collective Zines",
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: metadata?.title || "Zine Releases - Yage Punk Collective",
        description:
          metadata?.description ||
          "Explore our DIY zine releases featuring punk culture, radical politics, and underground art.",
        images: metadata?.ogImage ? [metadata.ogImage] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Zine Releases - Yage Punk Collective",
      description:
        "Explore our DIY zine releases featuring punk culture, radical politics, and underground art.",
    };
  }
}

export default async function ZinePage() {
  const zineReleases = getAllZineReleases();

  let zinePageContent;
  try {
    const response = await client.queries.zinePage({
      relativePath: "index.md",
    });
    zinePageContent = response.data.zinePage;
  } catch (error) {
    console.error("Error fetching zine page content:", error);
    zinePageContent = { title: "Zine Releases", summary: null };
  }

  return (
    <>
      <PageBanner title={zinePageContent.title || "Zine Releases"} />
      <PageSummary summary={zinePageContent.summary} />
      <Section>
        {zineReleases.length > 0 ? (
          zineReleases.map((zine, index) => (
            <CopyAndImage
              key={zine.id}
              img={zine.coverImage}
              reverse={index % 2 === 1}
              imgStyle="contain"
              imgPosition="center"
            >
              <div>
                <h2>{zine.title}</h2>
                {/* {zine.issue && (
                <p>
                  <strong>Issue:</strong> {zine.issue}
                </p>
              )} */}
                <p>
                  <strong>Release Date:</strong> {zine.releaseDate}
                </p>

                {zine.description && <p>{zine.description}</p>}

                {zine.featuredBands && zine.featuredBands.length > 0 && (
                  <div style={{ marginTop: "3rem" }}>
                    <h3>Featured Bands</h3>
                    <ul>
                      {zine.featuredBands.map((band, bandIndex) => (
                        <li style={{ fontSize: "1rem" }} key={bandIndex}>
                          {band.url ? (
                            <a
                              href={band.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {band.name}
                            </a>
                          ) : (
                            band.name
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                {zine.purchaseUrl && (
                  <Button href={zine.purchaseUrl} variant="primary">
                    Purchase
                  </Button>
                )}
                {zine.downloadUrl && (
                  <Button href={zine.downloadUrl} variant="secondary">
                    Download
                  </Button>
                )}
              </div>
            </CopyAndImage>
          ))
        ) : (
          <div className="container mx-auto px-4 py-8">
            <p className="text-center text-gray-600">
              No zine releases found. Check back soon for new publications!
            </p>
          </div>
        )}
      </Section>
    </>
  );
}
