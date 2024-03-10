import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import styles from "./input.module.scss";
const Input = ({
  type = "email",
  id,
  required = false,
  ...rest
}: {
  type?: HTMLInputTypeAttribute;
  pattern?: string;
  id: string;
  required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className={styles.input} type={type} id={id} size={30} {...rest} />
  );
};

export default Input;
