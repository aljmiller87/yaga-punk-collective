import React from "react";
import styles from "./styles.module.scss";
import Socials, { ISocial } from "../Socials";
const socials: ISocial[] = [
  {
    platform: "facebook",
    url: "https://www.facebook.com/people/Louder-Transition-Collective/61569673907364/",
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/rebel_rabbit_alex_ltc/",
  },
  {
    platform: "youtube",
    url: "https://www.youtube.com/@RebelRabbitAlex-LTC",
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
