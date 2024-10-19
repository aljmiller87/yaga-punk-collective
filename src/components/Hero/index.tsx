"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";
import BannerImg from "../../../public/uploads/logos/nozen-logo.png";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef?.current) {
      setIsMounted(true);
    }
  }, [imgRef]);

  return (
    <div className={styles.Hero} role="banner">
      <div
        ref={imgRef}
        className={`${styles.imgWrapper} ${isMounted && styles.isMounted}`}
      >
        <Image
          src={BannerImg}
          alt=""
          className={styles.img}
          fill={true}
          priority
        />
      </div>
      <div className={`${styles.buttons} ${isMounted && styles.isMounted}`}>
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
