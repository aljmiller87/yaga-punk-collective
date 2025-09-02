import React from "react";
import { getAllZineReleases } from "@/utils/zines";
import PageBanner from "@/components/PageBanner";
import CopyAndImage from "@/components/CopyAndImage";
import styles from "@/components/Button/styles.module.scss";

export default function ZinePage() {
  const zineReleases = getAllZineReleases();

  return (
    <>
      <PageBanner title="Zine Releases" />

      {zineReleases.length > 0 ? (
        zineReleases.map((zine, index) => (
          <CopyAndImage
            key={zine.id}
            img={zine.coverImage}
            reverse={index % 2 === 1}
            imgStyle="contain"
            imgPosition="center"
          >
            <div>
              <h2>{zine.title}</h2>
              {/* {zine.issue && (
                <p>
                  <strong>Issue:</strong> {zine.issue}
                </p>
              )} */}
              <p>
                <strong>Release Date:</strong> {zine.releaseDate}
              </p>

              {zine.description && <p>{zine.description}</p>}

              {zine.featuredBands && zine.featuredBands.length > 0 && (
                <div style={{ marginTop: "3rem" }}>
                  <h3>Featured Bands</h3>
                  <ul>
                    {zine.featuredBands.map((band, bandIndex) => (
                      <li key={bandIndex}>
                        {band.url ? (
                          <a
                            href={band.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {band.name}
                          </a>
                        ) : (
                          band.name
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              {zine.purchaseUrl && (
                <a
                  href={zine.purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.Button}
                >
                  Purchase
                </a>
              )}
              {zine.downloadUrl && (
                <a
                  href={zine.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.Button}
                >
                  Download
                </a>
              )}
            </div>
          </CopyAndImage>
        ))
      ) : (
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            No zine releases found. Check back soon for new publications!
          </p>
        </div>
      )}
    </>
  );
}
