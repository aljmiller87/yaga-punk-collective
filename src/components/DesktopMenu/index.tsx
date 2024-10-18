import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const DesktopMenu = () => {
  return (
    <nav className={styles.DesktopMenu}>
      <ul>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        {/* <li>
          <Link href="/endorsements">Endorsements</Link>
        </li>
        <li>
          <Link href="/issues">On the Issues</Link>
        </li>
        <li>
          <Link href="/newsroom">In the News</Link>
        </li>
        <li>
          <Link href="/join-us">Join Us</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
