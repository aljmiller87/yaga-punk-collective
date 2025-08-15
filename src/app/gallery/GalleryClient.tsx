"use client";
import React, { useState } from "react";
import GalleryContent from "./GalleryContent";
import VideoGalleryContent from "./VideoGalleryContent";
import { IVideoItem } from "@/utils/videos";
import Toggle from "@/components/Toggle";

interface GalleryClientProps {
  galleryItems: any[];
  videoItems: IVideoItem[];
}

export default function GalleryClient({
  galleryItems,
  videoItems,
}: GalleryClientProps) {
  const [activeView, setActiveView] = useState("pictures");

  const toggleOptions = [
    { label: "Pictures", value: "pictures" },
    { label: "Videos", value: "videos" },
  ];

  return (
    <>
      <Toggle
        options={toggleOptions}
        value={activeView}
        onChange={setActiveView}
      />
      {activeView === "videos" ? (
        <VideoGalleryContent items={videoItems} />
      ) : (
        <GalleryContent items={galleryItems} />
      )}
    </>
  );
}
