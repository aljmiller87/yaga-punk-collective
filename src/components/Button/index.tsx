import React from "react";
import styles from "./styles.module.scss";

const Button = ({
  children,
  onClick = null,
  type = "button",
}: {
  children: string;
  onClick?: VoidFunction | null;
  type?: "submit" | "reset" | "button" | undefined;
}) => {
  return (
    <button
      type={type}
      onClick={onClick ? onClick : () => null}
      className={styles.Button}
    >
      {children}
    </button>
  );
};

export default Button;
