import React from "react";
import VideoPlayer from "../VideoPlayer";
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
        <AudioPlayer
          title="It was never for us"
          file="It-was-never-for-us.mp3"
        />
        <AudioPlayer title="Not A Collapse" file="Not-a-collapse.mp3" />
        <AudioPlayer title="Rent Is Theft" file="Rent-Is-Theft.mp3" />
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
