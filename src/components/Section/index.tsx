import React, { ReactNode } from "react";
import styles from "./section.module.scss";
const Section = ({
  children,
  darkTheme = false,
  className = "",
}: {
  darkTheme?: boolean;
  className?: string;
  children: ReactNode | ReactNode[];
}) => {
  const themeClass = !!darkTheme ? styles.variant : ``;
  return (
    <div
      className={`${styles.Section} ${themeClass} ${className} PageContainer`}
    >
      {children}
    </div>
  );
};

export default Section;
