"use client";

import React from "react";
import styles from "./header.module.scss";
import Logo from "../Logo";
import MenuIcon from "../MenuIcon";

const Header = () => {
  const version: number = 2;
  const v2 = version === 2 ? `${styles.v2}` : ``;
  const v3 = version === 3 ? `${styles.v3}` : ``;
  return (
    <header className={`${styles.Header} ${v2} ${v3}`}>
      <Logo version={version} />
      <MenuIcon version={version} />
    </header>
  );
};

export default Header;
