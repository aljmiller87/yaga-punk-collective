import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const DesktopMenu = () => {
  return (
    <nav className={styles.DesktopMenu}>
      <ul>
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
          <Link href="/join-us">Get Involved</Link>
        </li>
        {/* <li>
          <Link href="/events">Events</Link>
        </li> */}
        {/* <li>
          <Link href="/">Donate</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
