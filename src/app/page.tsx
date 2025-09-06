import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import { client } from "../../tina/__generated__/client";

// Components
import Hero from "@/components/Hero";
import Section from "@/components/Section";
// import AudioGallery from "@/components/AudioGallery";
import Disclaimer from "@/components/Disclaimer";
import "../styles/theme.css";
import CopyAndImage from "@/components/CopyAndImage";
import ThreeColContent from "@/components/ThreeColContent";

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
      title: "Yaga Punk Collective",
      description:
        "Building community through radical politics, DIY culture, and punk resistance",
    };
  }

  const { metadata } = homepage;

  return {
    title: metadata?.title || "Yaga Punk Collective",
    description:
      metadata?.description ||
      "Building community through radical politics, DIY culture, and punk resistance",
    keywords: metadata?.keywords?.split(",").map((k: string) => k.trim()) || [
      "Yaga Punk Collective",
      "anarchist punk",
      "DIY culture",
      "radical politics",
      "punk resistance",
    ],
    openGraph: {
      type: "website",
      url: "https://yagapunkcollective.com",
      title: metadata?.ogTitle || metadata?.title || "Yaga Punk Collective",
      description:
        metadata?.ogDescription ||
        metadata?.description ||
        "Building community through radical politics, DIY culture, and punk resistance",
      siteName: "Yaga Punk Collective",
      images: metadata?.ogImage
        ? [
            {
              url: metadata.ogImage,
              width: 1200,
              height: 1200,
              alt: "Yaga Punk Collective",
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
      title: metadata?.title || "Yaga Punk Collective",
      description:
        metadata?.description ||
        "Building community through radical politics, DIY culture, and punk resistance",
      images: metadata?.ogImage ? [metadata.ogImage] : [],
    },
  };
}

export default async function Home() {
  const homepageData = await getHomepageData();

  console.log("homepageData", homepageData);

  // Fetch zine data if zineSection exists
  const zines = homepageData?.zineSection
    ? await getZinesFromHomepage(homepageData.zineSection)
    : [];

  const heroProps = {
    image:
      homepageData?.heroComponent?.image ||
      "/uploads/images/yaga-punk-collective-hero.jpg",
    title: homepageData?.heroComponent?.title || "Yaga Punk Collective",
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
        <CopyAndImage
          imgStyle="contain"
          img={
            homepageData?.bookPromoSection?.image || "/uploads/images/book.jpg"
          }
          reverse={true}
        >
          <h2>{homepageData?.bookPromoSection?.title || "Our Latest Zine"}</h2>
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
        </CopyAndImage>
      </Section>

      {/* Zine Section */}
      {homepageData?.zineSection && (
        <Section>
          <ThreeColContent
            title={homepageData.zineSection.title || "Our Zines"}
            subtitle={
              homepageData.zineSection.subtitle ||
              "Explore our radical publications"
            }
            zines={zines}
            mainButtonText="View All Zines"
            mainButtonUrl="/zine"
          />
        </Section>
      )}
    </>
  );
}
