"use client";
import React, { useState } from "react";
import { IGalleryItem } from "@/utils/gallery";
import GalleryImage from "@/components/GalleryImage";

interface GalleryCarouselProps {
  items: IGalleryItem[];
}

export default function GalleryCarousel({ items }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleNavigate = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }
  };

  const handleOpenFullScreen = (index: number) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <>
      {items.map((item, index) => (
        <GalleryImage
          key={item.id}
          item={item}
          allItems={items}
          currentIndex={index}
          isFullScreen={isFullScreen && currentIndex === index}
          onNavigate={handleNavigate}
          onOpenFullScreen={() => handleOpenFullScreen(index)}
          onCloseFullScreen={handleCloseFullScreen}
        />
      ))}
    </>
  );
}
