import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import Link from "next/link";

const ImageWithGradient = () => {
  const BannerImg = "/images/logo3.jpg";
  return (
    <div className={styles.Hero} role="banner">
      <div className="PageContainer"></div>
      <div className={styles.imgWrapper}>
        <div className={styles.imgGradient} />
        <Image src={BannerImg} alt="" className={styles.img} priority />
      </div>
    </div>
  );
};

export default ImageWithGradient;
