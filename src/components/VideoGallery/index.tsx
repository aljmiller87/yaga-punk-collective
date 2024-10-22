import React from "react";
import VideoPlayer from "../VideoPlayer";
import Section from "../Section";
import styles from "./styles.module.scss";
const VideoGallery = ({
  title,
  addCta = false,
}: {
  title?: string;
  addCta?: boolean;
}) => {
  return (
    <Section>
      {title && <h2 className={styles["VideoGallery-title"]}>{title}</h2>}
      <div className={styles.VideoGallery}>
        <VideoPlayer title="Video 1" id="1FLYZdxsteo" />
        <VideoPlayer title="Video 2" id="1FLYZdxsteo" />
        <VideoPlayer title="Video 3" id="1FLYZdxsteo" />
      </div>
      {addCta && (
        <div className={styles["VideoGallery-buttons"]}>
          <a href="/gallery" className="Btn-primary">
            See More!
          </a>
        </div>
      )}
    </Section>
  );
};

export default VideoGallery;
