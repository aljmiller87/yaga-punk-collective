import React from "react";
import Image from "next/image";
import styles from "./fullwidthimagecontent.module.scss";
import BgImg from "../../../public/assets/images/speaking-to-group.jpg";
import Input from "../Input";
import Link from "next/link";

const FullWidthImageContent = () => {
  return (
    <div className={styles.FullWidthImageContent}>
      <div className={styles.img}>
        <Image
          src={BgImg}
          alt="Emma Curtis"
          className={styles.img}
          fill={true}
        />
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>Join our campaign</h2>
        <p className={styles.subtitle}>
          Whether you can donate or volunteer, you can make a difference!
        </p>
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
    </div>
  );
};

export default FullWidthImageContent;
