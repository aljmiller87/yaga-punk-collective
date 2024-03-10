import React from "react";
import PageBanner from "@/components/PageBanner";
import Issues from "@/views/home/issues";
import BannerImg from "../../../public/assets/images/uaw-strike1.jpg";

const IssuesPage = () => {
  return (
    <div>
      <PageBanner title="On the Issues" img={BannerImg} imgPosition="50% 38%" />
      <Issues />
    </div>
  );
};

export default IssuesPage;
