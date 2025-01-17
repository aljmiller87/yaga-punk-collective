import React from "react";
import Section from "../Section";
import styles from "./styles.module.scss";
import AudioPlayer from "../AudioPlayer";

const AudioGallery = ({
  title,
  addCta = false,
}: {
  title?: string;
  addCta?: boolean;
}) => {
  return (
    <Section>
      {title && <h2 className={styles["AudioGallery-title"]}>{title}</h2>}
      <div className={styles.AudioGallery}>
        <AudioPlayer title="On Being Used" file="On-Being-Used.mp3" />
        <AudioPlayer
          title="Untitled - NoZen Contrafactum"
          file="NoZen-song.mp3"
          isCover
        />
        <AudioPlayer title="Not A Collapse" file="Not-a-collapse.mp3" />
        <AudioPlayer title="Rent Is Theft" file="Rent-Is-Theft.mp3" />
        <AudioPlayer
          title="It was never for us"
          file="It-was-never-for-us.mp3"
        />
        <AudioPlayer title="Commie Gun" file="Commie-Gun.mp3" />
        {/* <AudioPlayer
          title="Never Homeless Again"
          file="Never-Homeless-Again.mp3"
        /> */}
      </div>
      {addCta && (
        <div className={styles["AudioGallery-buttons"]}>
          <a href="/gallery" className="Btn-primary">
            See More!
          </a>
        </div>
      )}
    </Section>
  );
};

export default AudioGallery;
