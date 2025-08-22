import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import styles from "./styles.module.scss";
const VideoPlayer = ({ id, title }: { id: string; title?: string }) => {
  return (
    <div className={styles.VideoPlayer}>
      {title && <h3>{title}</h3>}
      <YouTubeEmbed videoid={id} />
    </div>
  );
};

export default VideoPlayer;
