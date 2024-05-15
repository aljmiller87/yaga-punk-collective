import React from "react";
import styles from "./styles.module.scss";

const Button = ({
  children,
  onClick = null,
}: {
  children: string;
  onClick?: VoidFunction | null;
}) => {
  return (
    <button onClick={onClick ? onClick : () => null} className={styles.Button}>
      {children}
    </button>
  );
};

export default Button;
