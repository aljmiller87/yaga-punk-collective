"use client";
import React from "react";
import VideoPlayer from "@/components/VideoPlayer";
import styles from "./styles.module.scss";
import { IVideoItem } from "@/utils/videos";

interface VideoGalleryContentProps {
  items: IVideoItem[];
}

export default function VideoGalleryContent({
  items,
}: VideoGalleryContentProps) {
  return (
    <div className={styles.galleryGrid}>
      {items.map((item, index) => (
        <div key={index} className={styles.videoItem}>
          <VideoPlayer id={item.youtubeId} title={item.title} />
          <p>{item.date}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
