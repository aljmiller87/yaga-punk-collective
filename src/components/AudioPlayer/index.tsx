import React from "react";
import styles from "./styles.module.scss";
import Socials, { ISocial } from "../Socials";

const nozenSocials: ISocial[] = [
  {
    platform: "instagram",
    url: "https://www.instagram.com/nozen_punk/",
  },
];

const AudioPlayer = ({
  file,
  title,
  isCover = false,
}: {
  file: string;
  title?: string;
  isCover?: boolean;
}) => {
  const path = `../../../uploads/songs/${file}`;
  const clsName = `${styles.AudioPlayer} ${isCover && styles.isCover}`;
  return (
    <div className={clsName}>
      {!!title && <h3>{title}</h3>}
      {isCover && <Socials label="NoZen Socials" socials={nozenSocials} />}
      <audio controls>
        <source src={path} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
