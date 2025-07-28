"use client";
import React, { useState, useMemo } from "react";
import { IGalleryItem } from "@/utils/gallery";
import GalleryCarousel from "@/components/GalleryCarousel";
import CategoryFilter from "@/components/CategoryFilter";
import styles from "./styles.module.scss";

interface GalleryContentProps {
  items: IGalleryItem[];
}

export default function GalleryContent({ items }: GalleryContentProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") {
      return items;
    }
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className={styles.galleryGrid}>
        <GalleryCarousel items={filteredItems} />
      </div>
    </>
  );
}
