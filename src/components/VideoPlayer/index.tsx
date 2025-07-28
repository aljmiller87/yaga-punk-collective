import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";

const VideoPlayer = ({ id, title }: { id: string; title?: string }) => {
  return (
    <div>
      {title && <h3>{title}</h3>}
      <YouTubeEmbed videoid={id} />
    </div>
  );
};

export default VideoPlayer;
