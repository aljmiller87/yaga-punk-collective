import React from "react";
import Image from "next/image";
import BannerImg from "../../../public/assets/images/speaking-to-group.jpg";
import styles from "./styles.module.scss";

const PageBanner = ({ title }: { title: string }) => {
  return (
    <div className={styles.PageBanner}>
      <div className={styles.bg}></div>
      <div className={styles.img}>
        <Image
          src={BannerImg}
          alt="Emma Curtis"
          className={styles.img}
          priority
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default PageBanner;
