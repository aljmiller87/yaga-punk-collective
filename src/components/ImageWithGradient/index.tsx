import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import BannerImg from "../../../public/assets/images/Emma-with-andy-jacq.jpg";
import Link from "next/link";

const ImageWithGradient = () => {
  return (
    <div className={styles.Hero} role="banner">
      <div className="PageContainer"></div>
      <div className={styles.imgWrapper}>
        <div className={styles.imgGradient} />
        <Image
          src={BannerImg}
          alt="Emma Curtis"
          className={styles.img}
          priority
        />
      </div>
    </div>
  );
};

export default ImageWithGradient;
