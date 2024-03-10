import React from "react";
import styles from "./styles.module.scss";

const CheckBox = ({
  id,
  value,
  label,
}: {
  id: string;
  value: string;
  label: string;
}) => {
  return (
    <div className={styles.Checkbox}>
      <input type="checkbox" id={id} name={id} value={value} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckBox;
