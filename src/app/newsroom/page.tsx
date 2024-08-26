"use client";
import React from "react";
import PageBanner from "@/components/PageBanner";
import NewsList from "./NewsList";
import CopyAndImage from "@/components/CopyAndImage";
// import Top24 from "../../../public/assets/images/top-24-ky.jpg";

const NewsRoom = () => {
  return (
    <div>
      <h1>newsroom page</h1>
      {/* <PageBanner
        title="In the News"
        img={"/assets/images/Emma_with_news_camera.jpeg"}
        imgPosition="50% 16%"
      /> */}
      {/* <CopyAndImage img={Top24} imgPosition="50% 25%">
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
        <a
          href="https://www.kentucky.com/news/local/counties/fayette-county/article283777298.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </CopyAndImage> */}
      <NewsList />
    </div>
  );
};

export default NewsRoom;
