"use client";

import React, { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./header.module.scss";
import Logo from "../Logo";
import MenuIcon from "../MenuIcon";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    if (scrollY >= 10 && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollY < 10 && isScrolled) {
      setIsScrolled(false);
    }
  }, [isScrolled]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  const headerClass = isScrolled
    ? `${styles.Header} ${styles.isScrolled}`
    : styles.Header;

  return (
    <header className={headerClass}>
      <Logo variant="dark" />
      <MenuIcon
        isActive={isActive}
        setIsActive={setIsActive}
        isScrolled={isScrolled}
      />
      <MobileMenu isActive={isActive} />
    </header>
  );
};

export default Header;
