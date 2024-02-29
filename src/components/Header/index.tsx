"use client";

import React from "react";
import styles from "./header.module.scss";
import Logo from "../Logo";
import MenuIcon from "../MenuIcon";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Logo variant="dark" />
      <MenuIcon version={2} />
    </header>
  );
};

export default Header;
