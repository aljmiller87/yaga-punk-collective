import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import BannerImg from "../../../public/assets/images/headshot.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.Hero} role="banner">
      <div className={styles.text}>
        <p>Welcome!</p>
        <h1 className={styles.title}>
          My name is Emma Curtis and I&apos;m running to be your next
          Councilmember.
        </h1>
      </div>
      <div className={styles.imgWrapper}>
        <div className={styles.imgGradient} />
        <Image
          src={BannerImg}
          alt="Emma Curtis"
          className={styles.img}
          priority
        />
      </div>
      <div className={styles.buttons}>
        <Link
          href="https://secure.actblue.com/donate/emmacurtislex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate
        </Link>
        <Link href="/volunteer">Volunteer</Link>
      </div>
    </div>
  );
};

export default Hero;
