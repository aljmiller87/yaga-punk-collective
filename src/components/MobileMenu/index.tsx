import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import BgImage from "../../../public/assets/images/2024-fairness-speaking1.jpg";
import Link from "next/link";
const MobileMenu = ({ isActive }: { isActive: boolean }) => {
  const isActiveClass = isActive
    ? `${styles.MobileMenu} ${styles.isActive}`
    : styles.MobileMenu;

  return (
    <nav className={isActiveClass}>
      <div className={styles.bg} />
      {/* image background component */}
      <div className={styles.ImageWrapper}>
        <Image
          src={BgImage}
          alt="Emma Curtis speaking at Fairness Rally"
          height={1169}
          width={1169}
          className={styles.Image}
        />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
        <li>
          <Link href="/newsroom">In the news</Link>
        </li>
        <li>
          <Link href="/volunteer">Volunteer</Link>
        </li>
        <li>
          <Link href="/donate">Donate</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
