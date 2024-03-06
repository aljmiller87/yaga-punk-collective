"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./header.module.scss";
import Logo from "../Logo";
import MenuIcon from "../MenuIcon";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <header className={styles.Header}>
      <Logo variant="dark" />
      <MenuIcon isActive={isActive} setIsActive={setIsActive} />
      <MobileMenu isActive={isActive} />
    </header>
  );
};

export default Header;
