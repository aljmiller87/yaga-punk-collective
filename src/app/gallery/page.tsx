import React from "react";
import { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import styles from "./styles.module.scss";
import { getAllGalleryItems } from "@/utils/gallery";
import { getAllVideos } from "@/utils/videos";
import Section from "@/components/Section";
import GalleryContent from "./GalleryContent";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery - Yaga Punk Collective",
  description:
    "Photo gallery from Yaga Punk Collective events and performances",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Yaga Punk Collective",
  publisher: "Yaga Punk Collective",
  keywords: [
    "Yaga Punk Collective Gallery",
    "YPC Photos",
    "Punk Photos",
    "Charlotte Punk",
    "Concert Photos",
    "Live Music Photos",
  ],
  themeColor: "#0F8185",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://yagapunkcollective.com/gallery",
    title: "Gallery - Yaga Punk Collective",
    description:
      "Photo gallery from Yaga Punk Collective events and performances",
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
    title: "Gallery - Yaga Punk Collective",
    description:
      "Photo gallery from Yaga Punk Collective events and performances",
    images: [
      "https://yagapunkcollective.com/uploads/images/yaga-punk-collective-hero.jpg",
    ],
  },
};

export default async function Gallery() {
  const galleryItems = getAllGalleryItems();
  const videoItems = getAllVideos();

  return (
    <>
      <PageBanner title="Gallery" />
      <Section>
        <div className={styles.galleryContainer}>
          <div className="PageContainer">
            {/* <GalleryContent items={galleryItems} /> */}
            <GalleryClient
              galleryItems={galleryItems}
              videoItems={videoItems}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
