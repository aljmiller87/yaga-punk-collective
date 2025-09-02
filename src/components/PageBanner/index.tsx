import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import defaultImage from "../../../public/uploads/images/yaga-punk-collective-hero.jpg";

const PageBanner = ({
  title,
  img = defaultImage as unknown as string,
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
          alt=""
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
