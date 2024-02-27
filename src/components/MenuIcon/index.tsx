import React, { useState } from "react";
import styles from "./menuicon.module.scss";

const MenuIcon = ({
  defaultOpen = false,
  version,
}: {
  defaultOpen?: boolean;
  version: number;
}) => {
  const [isActive, setIsActive] = useState(defaultOpen);
  const handleClick = () => setIsActive(!isActive);
  const versionClass = version === 2 ? styles.v2 : ``;

  return (
    <button
      onClick={handleClick}
      className={`${styles.Menu} ${versionClass} ${
        isActive && styles.isActive
      }`}
    >
      <span className={styles["Menu-line"]} />
      <span className={styles["Menu-line"]} />
      <span className={styles["Menu-line"]} />
    </button>
  );
};

export default MenuIcon;
