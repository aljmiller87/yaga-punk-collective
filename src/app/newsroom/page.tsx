import React from "react";
import PageBanner from "@/components/PageBanner";
import NewsList from "./NewsList";
import CopyAndImage from "@/components/CopyAndImage";
import Top24 from "../../../public/assets/images/top-24-ky.jpg";
import BannerImg from "../../../public/assets/images/Emma_with_news_camera.jpeg";

const NewsRoom = () => {
  return (
    <div>
      <PageBanner title="In the News" img={BannerImg} imgPosition="50% 16%" />
      <CopyAndImage img={Top24} imgPosition="50% 25%">
        <h2>
          Emma Curtis named one of Lexington Herald-Leader&apos;s 24 to watch in
          2024
        </h2>
        <p>
          &quot;She is incredibly articulate, incredibly smart and above all
          else, she is a servant leader. She understands that leaders are not
          here to bask in the glow of a light on a stage, but to deliver for
          people that need them to deliver.&quot;
        </p>
        <p></p>
        <a href="https://www.kentucky.com/news/local/counties/fayette-county/article283777298.html">
          Read More
        </a>
      </CopyAndImage>
      <NewsList />
    </div>
  );
};

export default NewsRoom;
