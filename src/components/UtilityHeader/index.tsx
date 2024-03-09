import React from "react";
import styles from "./styles.module.scss";
import Socials from "../Socials";

const UtilityHeader = () => {
  return (
    <div className={`${styles.UtilityHeader} PageContainer`}>
      <p>Get in touch:</p>
      <Socials isHeader />
    </div>
  );
};

export default UtilityHeader;
