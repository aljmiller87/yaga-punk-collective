import React from "react";
import styles from "./styles.module.scss";
import Socials, { ISocial } from "../Socials";
const socials: ISocial[] = [
  {
    platform: "facebook",
    url: "https://www.facebook.com/yagapunkcollective/",
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/yagapunkcollective/",
  },
  {
    platform: "youtube",
    url: "https://www.youtube.com/@YagaPunkCollective",
  },
  // {
  //   platform: "tiktok",
  //   url: "www.tiktok.com",
  // },
];

const UtilityHeader = () => {
  return (
    <div className={`${styles.UtilityHeader} PageContainer`}>
      <Socials isHeader socials={socials} />
    </div>
  );
};

export default UtilityHeader;
