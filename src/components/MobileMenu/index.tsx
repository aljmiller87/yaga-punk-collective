import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const MobileMenu = ({ isActive }: { isActive: boolean }) => {
  const isActiveClass = isActive
    ? `${styles.MobileMenu} ${styles.isActive}`
    : styles.MobileMenu;

  // const BgImage = "/images/logo3.jpg";

  return (
    <nav className={isActiveClass}>
      <div className={styles.bg} />
      {/* image background component */}
      <div className={styles.ImageWrapper}>
        {/* <Image
          src={BgImage}
          alt=""
          height={1169}
          width={1169}
          className={styles.Image}
        /> */}
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/members">Members</Link>
        </li>
        <li>
          <Link href="/values">Values</Link>
        </li>
        <li>
          <Link href="/music">Music</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>

        <li>
          <Link href="/join-us">Join Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
