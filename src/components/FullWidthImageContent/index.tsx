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
        <h2>Currently Seeking guitarist and other help</h2>
        <p>
          Looking for a raw, aggressive guitarist to join our anarcho punk
          band—no egos, just noise and message. Must be into DIY ethics,
          anti-authoritarian politics, and playing fast, loud, and
          unapologetically. We rehearse weekly and gig monthly—gear, passion,
          and commitment a must. If you&apos;re ready to shred and scream for
          change, hit us up.
        </p>
        <p>
          If there are other ways you would like to get involved with the band,
          please contact us. We're looking for help on a few fronts
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
