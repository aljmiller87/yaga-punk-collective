import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const PageBanner = ({
  title,
  img = "/uploads/images/speaking-to-group.jpg",
  imgPosition = "50% 50%",
}: {
  title: string;
  img?: string;
  imgPosition?: string;
}) => {
  return (
    <div className={styles.PageBanner}>
      <div className={styles.bg}></div>
      <div className={styles.img}>
        <Image
          src={img}
          alt="Emma Curtis"
          className={styles.img}
          priority
          fill={true}
          style={{ objectPosition: imgPosition }}
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default PageBanner;
