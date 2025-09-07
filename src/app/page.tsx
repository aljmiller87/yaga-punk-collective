import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import { client } from "../../tina/__generated__/client";

// Components
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CopyAndImage from "@/components/CopyAndImage";
import ThreeColContent from "@/components/ThreeColContent";
import ZineSection from "@/components/ZineSection";
import { getAllZineReleases } from "@/utils/zines";
import "../styles/theme.css";
import CopyAndTwoImage from "@/components/CopyAndTwoImage";

// Temporary function to read homepage data directly until Tina types are regenerated
async function getHomepageData() {
  try {
    const filePath = path.join(process.cwd(), "content/homepage/index.md");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data;
  } catch (error) {
    console.error("Error reading homepage data:", error);
    return null;
  }
}

// Function to read zine data
async function getZineData(filename: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "content/zines",
      `${filename}.md`
    );
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data;
  } catch (error) {
    console.error(`Error reading zine data for ${filename}:`, error);
    return null;
  }
}

// Function to fetch zines referenced in homepage
async function getZinesFromHomepage(zineSection: any) {
  if (!zineSection?.zines) return [];

  const zinePromises = zineSection.zines.map(async (zineRef: any) => {
    if (zineRef.zine) {
      // Extract filename from path like "content/zines/BURN-THE-BROOM-RAISE-THE-FREAK-FLAG.md"
      const filename = zineRef.zine
        .replace("content/zines/", "")
        .replace(".md", "");
      return await getZineData(filename);
    }
    return null;
  });

  const zines = await Promise.all(zinePromises);
  return zines.filter((zine) => zine !== null);
}

export async function generateMetadata(): Promise<Metadata> {
  const homepage = await getHomepageData();

  if (!homepage) {
    return {
      title: "Yage Punk Collective",
      description:
        "Building community through radical politics, DIY culture, and punk resistance",
    };
  }

  const { metadata } = homepage;

  return {
    title: metadata?.title || "Yage Punk Collective",
    description:
      metadata?.description ||
      "Building community through radical politics, DIY culture, and punk resistance",
    keywords: metadata?.keywords?.split(",").map((k: string) => k.trim()) || [
      "Yage Punk Collective",
      "anarchist punk",
      "DIY culture",
      "radical politics",
      "punk resistance",
    ],
    openGraph: {
      type: "website",
      url: "https://Yagepunkcollective.com",
      title: metadata?.ogTitle || metadata?.title || "Yage Punk Collective",
      description:
        metadata?.ogDescription ||
        metadata?.description ||
        "Building community through radical politics, DIY culture, and punk resistance",
      siteName: "Yage Punk Collective",
      images: metadata?.ogImage
        ? [
            {
              url: metadata.ogImage,
              width: 1200,
              height: 1200,
              alt: "Yage Punk Collective",
            },
          ]
        : [],
    },
    twitter: {
      card:
        (metadata?.twitterCard as
          | "summary_large_image"
          | "summary"
          | "player"
          | "app") || "summary_large_image",
      title: metadata?.title || "Yage Punk Collective",
      description:
        metadata?.description ||
        "Building community through radical politics, DIY culture, and punk resistance",
      images: metadata?.ogImage ? [metadata.ogImage] : [],
    },
  };
}

export default async function Home() {
  const homepageData = await getHomepageData();
  const allZines = getAllZineReleases();
  const latestZine = allZines.length > 0 ? allZines[0] : undefined;

  console.log("homepageData", homepageData?.zineSection?.zines);

  const heroProps = {
    image:
      homepageData?.heroComponent?.image ||
      "/uploads/images/Yaga-punk-collective-hero.jpg",
    title: homepageData?.heroComponent?.title || "Yage Punk Collective",
    subtitle:
      homepageData?.heroComponent?.subtitle ||
      "Building community through radical politics, DIY culture, and punk resistance",
    ctaUrl: homepageData?.heroComponent?.ctaUrl || "/join-us",
    ctaLabel: homepageData?.heroComponent?.ctaLabel || "Join the Movement",
  };

  return (
    <>
      <Hero {...heroProps} />
      <Section>
        <CopyAndTwoImage
          img1={
            homepageData?.bookPromoSection?.image || "/uploads/images/book.jpg"
          }
          img2={
            homepageData?.bookPromoSection?.image2 || "/uploads/images/book.jpg"
          }
          reverse={true}
          img1Style="contain"
          img2Style="contain"
          img1Alt="Book Image 1"
          img2Alt="Book Image 2"
        >
          <h2>{homepageData?.bookPromoSection?.title}</h2>

          {/* Review Section */}
          {homepageData?.bookPromoSection?.review && (
            <div
              style={{
                margin: "2rem 0",
              }}
            >
              <blockquote
                style={{
                  margin: "0 0 1rem 0",
                  fontStyle: "italic",
                  fontSize: "1.1rem",
                  fontWeight: "300",
                  lineHeight: "1.6",
                  color: "var(--gray)",
                }}
              >
                &ldquo;{homepageData.bookPromoSection.review.quote}&rdquo;
              </blockquote>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <cite
                  style={{
                    fontWeight: "600",
                    color: "var(--darkTealBg)",
                    fontSize: "0.9rem",
                    fontStyle: "normal",
                  }}
                >
                  — {homepageData.bookPromoSection.review.author}
                </cite>
                {homepageData.bookPromoSection.review.source && (
                  <a
                    href={homepageData.bookPromoSection.review.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--redLight)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      borderBottom: "1px solid var(--redLight)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    See full review
                  </a>
                )}
              </div>
            </div>
          )}
          <h3>Summary</h3>
          <p>
            {homepageData?.bookPromoSection?.description ||
              "Discover our latest zine featuring radical politics, DIY culture, and punk resistance. Join the conversation and be part of the movement."}
          </p>
          {homepageData?.bookPromoSection?.ctaUrl &&
            homepageData?.bookPromoSection?.ctaText && (
              <a
                href={homepageData.bookPromoSection.ctaUrl}
                className="cta-button"
                style={{
                  display: "inline-block",
                  background: "#ff4444",
                  color: "white",
                  padding: "1rem 2rem",
                  textDecoration: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginTop: "1rem",
                  transition: "all 0.3s ease",
                }}
              >
                {homepageData.bookPromoSection.ctaText}
              </a>
            )}
        </CopyAndTwoImage>
      </Section>

      {/* Zine Section */}
      {homepageData?.zineSection && (
        <Section>
          <ZineSection
            title={homepageData.zineSection.title || "Our Zines"}
            subtitle={
              homepageData.zineSection.subtitle ||
              "Explore our radical publications"
            }
            latestZine={latestZine}
            ctaUrl="/zine"
            ctaText="Explore All Zines"
          />
        </Section>
      )}
    </>
  );
}
