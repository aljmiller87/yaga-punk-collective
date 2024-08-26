import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import BgImage from "../../../public/uploads/images/2024-fairness-speaking1.jpg";
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
          <Link href="/endorsements">Endorsements</Link>
        </li>
        <li>
          <Link href="/meet-emma">Meet Emma</Link>
        </li>
        <li>
          <Link href="/issues">On the Issues</Link>
        </li>
        <li>
          <Link href="/newsroom">In the News</Link>
        </li>
        <li>
          <Link href="/join-us">Join Us</Link>
        </li>
        <li>
          <Link
            href="https://secure.actblue.com/donate/emmacurtislex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
