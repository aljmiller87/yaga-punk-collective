import React, { ReactNode } from "react";
import styles from "./section.module.scss";
const Section = ({
  children,
  darkTheme = false,
}: {
  darkTheme?: boolean;
  children: ReactNode | ReactNode[];
}) => {
  const themeClass = !!darkTheme ? styles.variant : ``;
  return (
    <div className={`${styles.Section} ${themeClass} PageContainer`}>
      {children}
    </div>
  );
};

export default Section;
