import React from "react";
import styles from "./styles.module.scss";
import Socials, { ISocial } from "../Socials";
const socials: ISocial[] = [
  {
    platform: "facebook",
    url: "https://www.facebook.com/Yagepunkcollective/",
  },
  {
    platform: "email",
    url: "yagepunkcollective@tutamail.com",
  },
];

const UtilityHeader = () => {
  return (
    <div className={`${styles.UtilityHeader} PageContainer`}>
      <Socials isHeader socials={socials} />
    </div>
  );
};

export default UtilityHeader;
