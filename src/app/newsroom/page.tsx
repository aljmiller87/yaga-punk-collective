import React from "react";
import PageBanner from "@/components/PageBanner";
import NewsList from "./NewsList";

const NewsRoom = () => {
  return (
    <div>
      <PageBanner title="Emma in the News" />
      <NewsList />
    </div>
  );
};

export default NewsRoom;
