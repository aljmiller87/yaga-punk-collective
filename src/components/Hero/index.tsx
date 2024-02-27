import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import BannerImg from "../../../public/assets/images/headshot.jpg";

const Hero = () => {
  return (
    <div className={styles.Hero} role="banner">
      <Image src={BannerImg} alt="Emma Curtis" className={styles["Hero-img"]} />
      <div className={styles["Hero-gradient"]} />
      <div className={styles["Hero-text"]}>
        <h1 className={styles["Hero-title"]}>Emma Curtis</h1>
        <p className={styles["Hero-subtitle"]}>Running for Lexington Council</p>
      </div>
    </div>
  );
};

export default Hero;
