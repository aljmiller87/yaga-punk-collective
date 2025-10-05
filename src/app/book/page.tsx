import React from "react";
import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PageSummary from "@/components/PageSummary";
import Section from "@/components/Section";
import Reviews from "@/components/Reviews";
import client from "../../../tina/__generated__/client";
import CopyAndTwoImage from "@/components/CopyAndTwoImage";
import { TinaMarkdown } from "tinacms/dist/rich-text";

// Generate metadata from TinaCMS content
export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await client.queries.bookPage({
      relativePath: "index.md",
    });

    const content = data.bookPage;
    const metadata = content.metadata;

    return {
      title:
        metadata?.title || "Down the Punk Rock Highway - Yage Punk Collective",
      description:
        metadata?.description ||
        "Down the Punk Rock Highway tells the story of punk culture through the eyes of someone who lived it.",
      authors: {
        name: "Yage Punk Collective",
      },
      creator: "Yage Punk Collective",
      publisher: "Yage Punk Collective",
      keywords: metadata?.keywords?.split(",").map((k: string) => k.trim()) || [
        "Down the Punk Rock Highway",
        "Punk Rock Book",
      ],
      themeColor: "#0F8185",
      robots: { index: true, follow: true },
      openGraph: {
        type: "website",
        url: "https://Yagepunkcollective.com/book",
        title:
          metadata?.title ||
          "Down the Punk Rock Highway - Yage Punk Collective",
        description:
          metadata?.description ||
          "Down the Punk Rock Highway tells the story of punk culture through the eyes of someone who lived it.",
        siteName: "Yage Punk Collective",
        images: metadata?.ogImage
          ? [
              {
                url: metadata.ogImage,
                width: 1200,
                height: 1200,
                alt: "Down the Punk Rock Highway",
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title:
          metadata?.title ||
          "Down the Punk Rock Highway - Yage Punk Collective",
        description:
          metadata?.description ||
          "Down the Punk Rock Highway tells the story of punk culture through the eyes of someone who lived it.",
        images: metadata?.ogImage ? [metadata.ogImage] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Down the Punk Rock Highway - Yage Punk Collective",
      description:
        "Down the Punk Rock Highway tells the story of punk culture through the eyes of someone who lived it.",
    };
  }
}

export default async function BookPage() {
  let bookPageContent;
  let homepageContent;

  try {
    const response = await client.queries.bookPage({
      relativePath: "index.md",
    });
    bookPageContent = response.data.bookPage;
  } catch (error) {
    console.error("Error fetching book page content:", error);
    return (
      <div>
        <PageBanner title="Down the Punk Rock Highway" />
        <p>Content not found. Please create the bookPage content in TinaCMS.</p>
      </div>
    );
  }

  // Fetch homepage content to get book images
  try {
    const homepageResponse = await client.queries.homepage({
      relativePath: "index.md",
    });
    homepageContent = homepageResponse.data.homepage;
  } catch (error) {
    console.error("Error fetching homepage content:", error);
  }

  const bookImage1 =
    homepageContent?.bookPromoSection?.image || "/uploads/images/book.jpg";
  const bookImage2 =
    homepageContent?.bookPromoSection?.image2 ||
    "/uploads/images/book-back-cover.jpeg";

  return (
    <>
      <PageBanner
        title={bookPageContent.title || "Down the Punk Rock Highway"}
      />
      <Section>
        <CopyAndTwoImage
          img1={bookImage1}
          img2={bookImage2}
          reverse={true}
          img1Style="contain"
          img2Style="contain"
          img1Alt="Down the Punk Rock Highway - Front Cover"
          img2Alt="Down the Punk Rock Highway - Back Cover"
        >
          <h2>{bookPageContent.title}</h2>
          <TinaMarkdown content={bookPageContent.summary} />
        </CopyAndTwoImage>
      </Section>

      {/* Reviews Section */}
      {bookPageContent.reviews && bookPageContent.reviews.length > 0 && (
        <Section>
          <Reviews reviews={bookPageContent.reviews} />
        </Section>
      )}
    </>
  );
}
