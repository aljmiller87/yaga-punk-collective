import React from "react";
import Image from "next/image";
import styles from "./fullwidthimagecontent.module.scss";
import bgImage from "../../../public/uploads/images/audience.jpg";
import Link from "next/link";

const FullWidthImageContent = () => {
  return (
    <div className={styles.FullWidthImageContent}>
      <div className={styles.img}>
        <Image src={bgImage} alt="" className={styles.img} fill={true} />
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>Get Involved!</h2>
        <p className={styles.subtitle}>
          This project is just getting off the ground with{" "}
          <Link href="/members">Rebel Rabbit Alex</Link> writing, playing, and
          recording guitar, bass, and vocals.
        </p>
        <p>
          <Link href="/members">Rebel Rabbit Alex</Link> is also managing all
          web work and social media. <b>You&apos;re help is needed!</b>
        </p>
        <div className={`${styles.buttons} Btn-primary`}>
          <Link href="/join-us">Get Involved</Link>
        </div>
      </div>
    </div>
  );
};

export default FullWidthImageContent;
