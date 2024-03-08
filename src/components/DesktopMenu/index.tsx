import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const DesktopMenu = () => {
  return (
    <nav className={styles.DesktopMenu}>
      <ul>
        <li>
          <Link href="/about-emma">About Emma</Link>
        </li>
        <li>
          <Link href="/issues">On the Issues</Link>
        </li>
        <li>
          <Link href="/newsroom">In the News</Link>
        </li>
        <li>
          <Link href="/volunteer">Volunteer</Link>
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

export default DesktopMenu;
