"use client";
import React from "react";
import { IGalleryItem } from "@/utils/gallery";
import styles from "./styles.module.scss";

interface GalleryImageProps {
  item: IGalleryItem;
  allItems?: IGalleryItem[];
  currentIndex?: number;
  isFullScreen?: boolean;
  onNavigate?: (direction: "prev" | "next") => void;
  onOpenFullScreen?: () => void;
  onCloseFullScreen?: () => void;
}

export default function GalleryImage({
  item,
  allItems = [],
  currentIndex = 0,
  isFullScreen = false,
  onNavigate,
  onOpenFullScreen,
  onCloseFullScreen,
}: GalleryImageProps) {
  const handleImageClick = () => {
    if (onOpenFullScreen) {
      onOpenFullScreen();
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      if (onCloseFullScreen) {
        onCloseFullScreen();
      }
    }
  };

  const handleNavigate = (direction: "prev" | "next") => {
    if (onNavigate) {
      onNavigate(direction);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isFullScreen) return;

    switch (e.key) {
      case "ArrowLeft":
        handleNavigate("prev");
        break;
      case "ArrowRight":
        handleNavigate("next");
        break;
      case "Escape":
        if (onCloseFullScreen) {
          onCloseFullScreen();
        }
        break;
    }
  };

  const canNavigatePrev = allItems.length > 1;
  const canNavigateNext = allItems.length > 1;

  return (
    <>
      <div className={styles.galleryItem} onClick={handleImageClick}>
        <img
          src={item.image}
          alt={item.altText}
          className={styles.galleryImage}
        />
        <div className={styles.imageOverlay}>
          <h3>{item.title}</h3>
          <span className={styles.category}>{item.category}</span>
          {item.location && <p className={styles.location}>{item.location}</p>}
          {item.photographer && (
            <p className={styles.photographer}>Photo: {item.photographer}</p>
          )}
        </div>
      </div>

      {isFullScreen && (
        <div
          className={styles.fullScreenModal}
          onClick={handleModalClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className={styles.fullScreenContent}>
            <button
              className={styles.closeButton}
              onClick={onCloseFullScreen}
              aria-label="Close full screen view"
            >
              ×
            </button>

            {canNavigatePrev && (
              <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={() => handleNavigate("prev")}
                aria-label="Previous image"
              >
                ‹
              </button>
            )}

            {canNavigateNext && (
              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={() => handleNavigate("next")}
                aria-label="Next image"
              >
                ›
              </button>
            )}

            <img
              src={item.image}
              alt={item.altText}
              className={styles.fullScreenImage}
            />
            <div className={styles.fullScreenOverlay}>
              <h2>{item.title}</h2>
              <span className={styles.category}>{item.category}</span>
              {item.location && (
                <p className={styles.location}>{item.location}</p>
              )}
              {item.photographer && (
                <p className={styles.photographer}>
                  Photo: {item.photographer}
                </p>
              )}
              {allItems.length > 1 && (
                <div className={styles.imageCounter}>
                  {currentIndex + 1} of {allItems.length}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
