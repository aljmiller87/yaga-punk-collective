"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  ctaUrl?: string;
  ctaLabel?: string;
}

const Hero: React.FC<HeroProps> = ({
  image,
  title,
  subtitle,
  ctaUrl,
  ctaLabel,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef?.current) {
      setIsMounted(true);
    }
  }, [imgRef]);

  return (
    <div className={styles.Hero} role="banner">
      {/* Background Image Container */}
      <div className={styles.backgroundContainer}>
        {/* Desktop: Left half no overlay, right half gradient overlay */}
        <div className={styles.desktopOverlay}></div>

        {/* Mobile: Top no overlay, bottom opacity overlay */}
        <div className={styles.mobileOverlay}></div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt="Hero background"
          className={styles.backgroundImage}
          fill={true}
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      {/* Content Container */}
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{subtitle}</p>
          {ctaUrl && ctaLabel && (
            <Link href={ctaUrl} className={styles.ctaButton}>
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
