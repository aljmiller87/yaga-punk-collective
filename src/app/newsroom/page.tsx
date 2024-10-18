"use client";
import React from "react";
import PageBanner from "@/components/PageBanner";
import NewsList from "./NewsList";
import CopyAndImage from "@/components/CopyAndImage";
import Top24 from "../../../public/uploads/images/top-24-ky.jpg";

const NewsRoom = () => {
  return (
    <div>
      <PageBanner title="In the News" img={""} imgPosition="50% 16%" />
      <NewsList />
    </div>
  );
};

export default NewsRoom;
