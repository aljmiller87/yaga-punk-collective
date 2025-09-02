import React from "react";
import Image from "next/image";
import styles from "./fullwidthimagecontent.module.scss";
import bgImage from "../../../public/uploads/images/yaga-punk-collective-hero.jpg";
import Link from "next/link";

const FullWidthImageContent = () => {
  return (
    <div className={styles.FullWidthImageContent}>
      <div className={styles.img}>
        <Image src={bgImage} alt="" className={styles.img} fill={true} />
      </div>
      <div className={styles.text}>
        <h2>Currently seeking help</h2>

        <p>
          If there are ways you would like to get involved with the band, please
          contact us. We&apos;re looking for help on a few fronts
        </p>
        <ul>
          <li>production</li>
          <li>graphic design</li>
          <li>promotion</li>
          <li>mutual aid group liasons</li>
        </ul>
        <div className={`${styles.buttons} Btn-primary`}>
          <Link href="/join-us">Get Involved</Link>
        </div>
      </div>
    </div>
  );
};

export default FullWidthImageContent;
