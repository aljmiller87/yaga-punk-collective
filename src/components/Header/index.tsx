"use client";

import React, { useState } from "react";
import styles from "./header.module.scss";
import Logo from "../Logo";
import MenuIcon from "../MenuIcon";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className={styles.Header}>
      <Logo variant="dark" />
      <MenuIcon isActive={isActive} setIsActive={setIsActive} />
      <MobileMenu isActive={isActive} />
    </header>
  );
};

export default Header;
