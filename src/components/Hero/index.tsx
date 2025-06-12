"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import BannerImg from "../../../public/uploads/icons/LTC-logo-with-text.svg";

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
    </div>
  );
};

export default Hero;
