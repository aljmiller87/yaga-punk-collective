import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IZineRelease } from "@/utils/zines";
import styles from "./styles.module.scss";

interface ZineSectionProps {
  title: string;
  subtitle: string;
  latestZine?: IZineRelease;
  ctaUrl?: string;
  ctaText?: string;
}

const ZineSection: React.FC<ZineSectionProps> = ({
  title,
  subtitle,
  latestZine,
  ctaUrl = "/zine",
  ctaText = "Explore All Zines",
}) => {
  return (
    <div className={styles.ZineSection}>
      <div className={styles.Content}>
        {/* Header Section */}
        <div className={styles.HeaderContent}>
          <h2 className={styles.Title}>{title}</h2>
          <p className={styles.Subtitle}>{subtitle}</p>
        </div>

        {/* Zine Details Section */}
        {latestZine && (
          <div className={styles.ZineContent}>
            <div className={styles.TextContent}>
              <div className={styles.LatestZine}>
                <h3 className={styles.ZineTitle}>
                  Latest Release: {latestZine.title}
                </h3>
                {latestZine.issue && (
                  <span className={styles.IssueNumber}>
                    Issue {latestZine.issue}
                  </span>
                )}
                <p className={styles.ReleaseDate}>
                  Released: {latestZine.releaseDate}
                </p>
                {latestZine.description && (
                  <p className={styles.ZineDescription}>
                    {latestZine.description}
                  </p>
                )}
                {latestZine.featuredBands &&
                  latestZine.featuredBands.length > 0 && (
                    <div className={styles.FeaturedBands}>
                      <span className={styles.BandsLabel}>Featured bands:</span>
                      <span className={styles.BandsList}>
                        {latestZine.featuredBands
                          .slice(0, 3)
                          .map((band, index) => (
                            <span key={index}>
                              {band.name}
                              {index <
                              Math.min(latestZine.featuredBands!.length, 3) - 1
                                ? ", "
                                : ""}
                            </span>
                          ))}
                        {latestZine.featuredBands.length > 3 && " & more"}
                      </span>
                    </div>
                  )}
              </div>
            </div>

            <div className={styles.ImageContent}>
              <div className={styles.ZineImage}>
                <Image
                  src={latestZine.coverImage}
                  alt={`${latestZine.title} cover 1`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              {latestZine.coverImage2 && (
                <div className={styles.ZineImage}>
                  <Image
                    src={latestZine.coverImage2}
                    alt={`${latestZine.title} cover 2`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA Button Section */}
        <div className={styles.CtaSection}>
          <Link href={ctaUrl} className={styles.CtaButton}>
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ZineSection;
