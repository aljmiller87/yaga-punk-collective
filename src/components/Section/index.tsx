import React, { ReactNode } from "react";
import styles from "./section.module.scss";
const Section = ({
  children,
  darkTheme = false,
  className = "",
  isSummary = false,
}: {
  darkTheme?: boolean;
  className?: string;
  isSummary?: boolean;
  children: ReactNode | ReactNode[];
}) => {
  const themeClass = !!darkTheme ? styles.variant : ``;
  const summaryClass = !!isSummary ? styles.summary : ``;
  return (
    <div
      className={`${styles.Section} ${themeClass} ${summaryClass} ${className} PageContainer`}
    >
      {children}
    </div>
  );
};

export default Section;
