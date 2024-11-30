import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import bgImage from "../../../public/uploads/images/audience.jpg";

const ImageWithGradient = () => {
  return (
    <div className={styles.Hero} role="banner">
      <div className="PageContainer"></div>
      <div className={styles.imgWrapper}>
        <div className={styles.imgGradient} />
        <Image src={bgImage} alt="" className={styles.img} priority />
      </div>
    </div>
  );
};

export default ImageWithGradient;
