"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";
import BannerImg from "../../../public/uploads/icons/LT-logo-with-text-anarcho-queer.svg";
import bgImage from "../../../public/uploads/images/8m-women-strike-movement.jpg";
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
      {/* <div className={styles.bgImage}>
        <div className={styles.bgImageBg} />
        <Image
          src={bgImage}
          alt=""
          // className={styles.img}
          fill={true}
          priority
        />{" "}
      </div> */}
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
      {/* <Section className={`${styles.buttons} ${isMounted && styles.isMounted}`}>
        <h3>Now Recruiting!</h3>
        <Link href="/join-us" className="Btn-primary">
          Join Us
        </Link>
      </Section> */}
    </div>
  );
};

export default Hero;
