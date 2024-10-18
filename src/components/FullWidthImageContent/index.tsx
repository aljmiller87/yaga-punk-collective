import React from "react";
import Image from "next/image";
import styles from "./fullwidthimagecontent.module.scss";
import Input from "../Input";
import Link from "next/link";

const FullWidthImageContent = () => {
  const BgImg = "https://placehold.jp/336x280.png";
  return (
    <div className={styles.FullWidthImageContent}>
      <div className={styles.img}>
        <Image src={BgImg} alt="" className={styles.img} fill={true} />
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>title!</h2>
        <p className={styles.subtitle}>copy text.</p>
        <div className={styles.buttons}>
          <Link
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Button One
          </Link>
          <Link
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Button One
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullWidthImageContent;
