import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import Link from "next/link";
import BannerImg from "../../../public/uploads/logos/nozen-logo.png";

const Hero = () => {
  return (
    <div className={styles.Hero} role="banner">
      <div className={styles.imgWrapper}>
        <Image
          src={BannerImg}
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
