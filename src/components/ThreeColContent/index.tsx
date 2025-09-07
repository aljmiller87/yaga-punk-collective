import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

interface ZineData {
  title: string;
  issue?: string;
  coverImage: string;
  description: string;
  purchaseUrl?: string;
  downloadUrl?: string;
  releaseDate: string;
}

interface ColumnData {
  title: string;
  image: string;
  description: string;
  url: string;
  buttonText: string;
}

interface ThreeColContentProps {
  title: string;
  subtitle: string;
  columns?: ColumnData[];
  zines?: ZineData[];
  mainButtonText: string;
  mainButtonUrl: string;
}

const ThreeColContent: React.FC<ThreeColContentProps> = ({
  title,
  subtitle,
  columns,
  zines,
  mainButtonText,
  mainButtonUrl,
}) => {
  // Convert zines to column format if zines are provided
  const displayItems = zines
    ? zines.map((zine) => ({
        title: zine.issue ? `Issue ${zine.issue}` : zine.title,
        image: zine.coverImage,
        description: zine.description,
        url: zine.purchaseUrl || zine.downloadUrl || "/zine",
        buttonText: zine.purchaseUrl ? "Get Zine" : "Read More",
      }))
    : columns || [];

  // Determine the number of columns based on the number of items
  const getColumnClass = (itemCount: number) => {
    if (itemCount === 1) return styles.OneColumn;
    if (itemCount === 2) return styles.TwoColumns;
    return styles.ThreeColumns; // 3 or more items
  };

  const columnClassName = `${styles.ColumnsContainer} ${getColumnClass(
    displayItems.length
  )}`;

  return (
    <section className={styles.ThreeColContent}>
      <h2 className={styles.Title}>{title}</h2>
      <p className={styles.Subtitle}>{subtitle}</p>

      <div className={columnClassName}>
        {displayItems.map((item, index) => (
          <div key={index} className={styles.Column}>
            <div className={styles.ColumnImage}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3 className={styles.ColumnTitle}>{item.title}</h3>
            <p className={styles.ColumnDescription}>{item.description}</p>
            <Link href={item.url} className={styles.ColumnButton}>
              {item.buttonText}
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.CenterButton}>
        <Link href={mainButtonUrl} className={styles.MainButton}>
          {mainButtonText}
        </Link>
      </div>
    </section>
  );
};

export default ThreeColContent;
