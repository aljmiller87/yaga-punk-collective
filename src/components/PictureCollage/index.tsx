import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

interface PictureCollageProps {
  images: string[];
  title?: string;
}

const PictureCollage: React.FC<PictureCollageProps> = ({ images, title }) => {
  if (!images || images.length === 0) {
    return null;
  }

  // Generate random styles for each image
  const generateRandomStyles = (index: number) => {
    // Use index as seed for consistent randomness
    const seed = index * 9999;
    const rotation = (seed % 31) - 15; // Random rotation between -15 and 15 degrees
    const translateX = ((seed * 7) % 81) - 40; // Random horizontal shift between -40px and 40px
    const translateY = ((seed * 11) % 41) - 20; // Random vertical shift between -20px and 20px
    const zIndex = Math.floor((seed % 10) + 1); // Random z-index for layering

    return {
      transform: `rotate(${rotation}deg) translate(${translateX}px, ${translateY}px)`,
      zIndex: zIndex,
    };
  };

  return (
    <div className={styles.pictureCollage}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.collageContainer}>
        {images.map((imageSrc, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            style={generateRandomStyles(index)}
          >
            <Image
              src={imageSrc}
              alt={`Collage image ${index + 1}`}
              width={300}
              height={300}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "auto",
                maxWidth: "300px",
              }}
              sizes="(max-width: 768px) 250px, 300px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PictureCollage;
