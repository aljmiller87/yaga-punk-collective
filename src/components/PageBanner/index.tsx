import React from "react";
import Image, { StaticImageData } from "next/image";
import BannerImg from "../../../public/assets/images/speaking-to-group.jpg";
import styles from "./styles.module.scss";

const PageBanner = ({
  title,
  img = BannerImg,
  imgPosition = "50% 50%",
}: {
  title: string;
  img?: StaticImageData;
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
          style={{ objectPosition: imgPosition }}
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default PageBanner;
