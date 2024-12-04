"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";
import BannerImg from "../../../public/uploads/icons/LTC-logo-with-text.svg";
import Section from "../Section";

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
      <Section className={`${styles.buttons} ${isMounted && styles.isMounted}`}>
        <h3>Now Recruiting!</h3>
        <Link href="/join-us">Join Us</Link>
      </Section>
    </div>
  );
};

export default Hero;
