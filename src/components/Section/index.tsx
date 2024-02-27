import React, { ReactNode } from "react";
import styles from "./section.module.scss";
const Section = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return <div className={styles.Section}>{children}</div>;
};

export default Section;
