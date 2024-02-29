import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import styles from "./input.module.scss";
const Input = ({
  type = "email",
  pattern = ".+@example.com",
  id,
  required = false,
}: {
  type?: HTMLInputTypeAttribute;
  pattern?: string;
  id: string;
  required?: boolean;
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      id={id}
      pattern={pattern}
      size={30}
      required
      placeholder="you@email.com"
    />
  );
};

export default Input;
