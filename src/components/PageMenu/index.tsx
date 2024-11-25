import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
const PageMenu = () => {
  return (
    <div className={styles.PageMenu}>
      <h3>On this page:</h3>
      <ul>
        <li>
          <Link href="/about-us">Members</Link>
        </li>
        <li>
          <Link href="/about-us">Values</Link>
        </li>
        <li>
          <Link href="/about-us">Goals</Link>
        </li>
      </ul>
    </div>
  );
};

export default PageMenu;
