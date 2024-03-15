import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import { INewsItem } from "@/app/newsroom/NewsList";

const Card = ({ title, url, img, teaser, venue, date }: INewsItem) => {
  const fullDate = new Date(date);
  const day = fullDate.getDate();
  const month = fullDate.toLocaleString("default", { month: "short" });

  return (
    <div className={styles.Card}>
      <div className={styles.ImageWrapper}>
        <div className={styles.ImageBg} />
        <Image src={img} alt="Emma Curtis" className={styles.img} fill />
      </div>
      <div className={styles.Content}>
        <div className={styles.Meta}>
          <div className={styles.Date}>
            <span>{day}</span>
            <span>{month}</span>
          </div>
          <div className={styles.Copy}>
            <h2>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h2>
            <p className={styles.Venue}>{venue}</p>
          </div>
        </div>
        <p className={styles.Teaser}>{teaser && teaser}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read More{" "}
          <Image
            priority
            alt={`Click to read more about title`}
            src="./assets/svgs/arrow_right.svg"
            width={16}
            height={16}
          />
        </a>
      </div>
    </div>
  );
};

export default Card;
