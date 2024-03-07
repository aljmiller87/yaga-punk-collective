import React, { useState } from "react";
import styles from "./menuicon.module.scss";

const MenuIcon = ({
  isActive,
  setIsActive,
  isScrolled,
}: {
  isActive: boolean;
  isScrolled: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClick = () => setIsActive(!isActive);

  return (
    <button
      onClick={handleClick}
      className={`${styles.Menu} ${isActive && styles.isActive} ${
        isScrolled && styles.isScrolled
      }`}
    >
      <span className={styles["Menu-line"]} />
      <span className={styles["Menu-line"]} />
      <span className={styles["Menu-line"]} />
    </button>
  );
};

export default MenuIcon;
