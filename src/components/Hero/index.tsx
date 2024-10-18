import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import Link from "next/link";

const Hero = ({
  title,
  bannerImage,
}: {
  title: string;
  bannerImage: string;
}) => {
  return (
    <div className={styles.Hero} role="banner">
      <div className="PageContainer">
        <div className={styles.text}>
          <p>Welcome!</p>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <div className={styles.imgGradient} />
        <Image
          src={bannerImage}
          alt=""
          className={styles.img}
          fill={true}
          priority
        />
      </div>
      <div className={styles.buttons}>
        <Link
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Button
        </Link>
        <Link href="/join-us">Join Us</Link>
      </div>
    </div>
  );
};

export default Hero;
