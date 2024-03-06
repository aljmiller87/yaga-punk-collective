import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import BannerImg from "../../../public/assets/images/headshow-nobg.png";
import FireWorks from "../Fireworks";

const Hero = () => {
  return (
    <div className={styles.Hero} role="banner">
      <div className={styles.fireWorks}>
        <FireWorks />
      </div>
      <div className={styles.text}>
        {/* <p className={styles.subtitle}>Welcome!</p> */}
        <h1 className={styles.title}>
          My name is Emma Curtis and I&apos;m running to be your next
          Councilmember.
        </h1>
        <div className={styles.buttons}>
          <a>Donate</a>
          <a>Volunteer</a>
        </div>
      </div>
      <div className={styles.imgWrapper}>
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

export default Hero;
