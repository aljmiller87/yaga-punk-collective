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
        <h2 className={styles.title}>Join our campaign!</h2>
        <p className={styles.subtitle}>
          Help us move Lexington forward together.
        </p>
        <div className={styles.buttons}>
          <Link
            href="https://secure.actblue.com/donate/emmacurtislex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </Link>
          <Link
            href="https://forms.gle/3RwUsGhbmbEXSwC3A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Volunteer
          </Link>
          <Link
            href="https://forms.gle/suukLVa9ZrQLqWpi7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request a Yard Sign
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullWidthImageContent;
