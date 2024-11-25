import React from "react";
import styles from "./styles.module.scss";

const AudioPlayer = ({ file, title }: { file: string; title: string }) => {
  const path = `../../../uploads/songs/${file}`;
  return (
    <div className={styles.AudioPlayer}>
      <h3>{title}</h3>
      <audio controls>
        <source src={path} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
