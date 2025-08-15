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
  title: "Gallery - Louder Transition Collective",
  description:
    "Photo gallery from Louder Transition Collective events and performances",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Rebel Rabbit Alex",
  publisher: "Rebel Rabbit Alex",
  keywords: [
    "Louder Transition Gallery",
    "LTC Photos",
    "Charlotte Punk Photos",
  ],
  themeColor: "#0F8185",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://wwww.loudertransition.com/gallery",
    title: "Gallery - Louder Transition Collective",
    description:
      "Photo gallery from Louder Transition Collective events and performances",
    siteName: "Louder Transition",
    images: [
      {
        url: "https://wwww.loudertransition.com/uploads/images/LTC-logo-w-text.png",
        width: 1200,
        height: 1200,
        alt: "Louder Transition Collective Logo - Anarcho Punk Band",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery - Louder Transition Collective",
    description:
      "Photo gallery from Louder Transition Collective events and performances",
    images: [
      "https://wwww.loudertransition.com/uploads/images/LTC-logo-w-text.png",
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
