import React from "react";
import { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

// Components
import CopyAndImage from "@/components/CopyAndImage";
import PageBanner from "@/components/PageBanner";
import Socials, { ISocial } from "@/components/Socials";
import MarkdownRenderer from "@/components/MarkdownRenderer";

// Styles
import styles from "./styles.module.scss";
import FullWidthImageContent from "@/components/FullWidthImageContent";

// Generate metadata from TinaCMS content
export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await client.queries.aboutJared({
      relativePath: "index.md",
    });

    const content = data.aboutJared;
    const metadata = content.metadata;

    return {
      title: metadata?.title || "About Jared - Yage Punk Collective",
      description:
        metadata?.description ||
        "Learn about Jared and their role in the Yage Punk Collective.",
      authors: {
        name: "Yage Punk Collective",
      },
      creator: "Yage Punk Collective",
      publisher: "Yage Punk Collective",
      keywords: metadata?.keywords?.split(",").map((k) => k.trim()) || [
        "Jared",
        "Yage Punk Collective",
        "Punk Musician",
        "About",
      ],
      themeColor: "#0F8185",
      robots: { index: true, follow: true },
      openGraph: {
        type: "website",
        url: "https://Yagepunkcollective.com/about-jared",
        title:
          metadata?.ogTitle ||
          metadata?.title ||
          "About Jared - Yage Punk Collective",
        description:
          metadata?.ogDescription ||
          metadata?.description ||
          "Learn about Jared and their role in the Yage Punk Collective.",
        siteName: "Yage Punk Collective",
        images: metadata?.ogImage
          ? [
              {
                url: metadata.ogImage,
                width: 1200,
                height: 1200,
                alt: `${content.title} - Yage Punk Collective`,
              },
            ]
          : [],
      },
      twitter: {
        card: (metadata?.twitterCard as any) || "summary_large_image",
        title:
          metadata?.ogTitle ||
          metadata?.title ||
          "About Jared - Yage Punk Collective",
        description:
          metadata?.ogDescription ||
          metadata?.description ||
          "Learn about Jared and their role in the Yage Punk Collective.",
        images: metadata?.ogImage ? [metadata.ogImage] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "About Jared - Yage Punk Collective",
      description:
        "Learn about Jared and their role in the Yage Punk Collective.",
    };
  }
}

export default async function AboutJared() {
  let content;

  try {
    const response = await client.queries.aboutJared({
      relativePath: "index.md",
    });
    content = response.data.aboutJared;
  } catch (error) {
    console.error("Error fetching about Jared content:", error);
    return (
      <div>
        <PageBanner title="About Jared Fallback" />
        <p>
          Content not found. Please create the aboutJared content in TinaCMS.
        </p>
      </div>
    );
  }

  return (
    <>
      <PageBanner title={content.title || "About Jared"} />

      <CopyAndImage
        img={content.image}
        imgPosition="center top"
        reverse={false}
        mobileReverse={false}
      >
        <h2>{content.title}</h2>

        <TinaMarkdown content={content.bio} />

        {/* {content.socialMediaUrls && content.socialMediaUrls.length > 0 && (
          <div className={styles.socialContainer}>
            <Socials
              socials={
                content.socialMediaUrls
                  .filter((social) => social !== null)
                  .map((social) => ({
                    platform: social!.platform as any,
                    url: social!.url,
                  })) as ISocial[]
              }
            />
          </div>
        )} */}
      </CopyAndImage>

      {/* <FullWidthImageContent /> */}
    </>
  );
}
