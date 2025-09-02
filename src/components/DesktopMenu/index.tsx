import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const DesktopMenu = () => {
  return (
    <nav className={styles.DesktopMenu}>
      <ul>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/label">Labels</Link>
        </li>
        <li>
          <Link href="/zine">Zines</Link>
        </li>
        <li>
          <Link href="/book">Book</Link>
        </li>
        <li>
          <Link href="/about-jared">About Jared</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
