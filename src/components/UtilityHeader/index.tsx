import React from "react";
import styles from "./styles.module.scss";
import Socials, { ISocial } from "../Socials";
const socials: ISocial[] = [
  {
    platform: "facebook",
    url: "www.facebook.com",
  },
  {
    platform: "instagram",
    url: "www.instagram.com",
  },
  {
    platform: "twitter",
    url: "www.twitter.com",
  },
  {
    platform: "tiktok",
    url: "www.tiktok.com",
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
