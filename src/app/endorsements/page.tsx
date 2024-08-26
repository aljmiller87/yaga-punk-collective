import React from "react";
import PageBanner from "@/components/PageBanner";
import { getPageData } from "../utils";
import Endorsements from "@/components/Endorsements";

export default async function IssuesPage() {
  const {
    data: {
      pages: { title, bannerImage, bodyText },
    },
  } = await getPageData("Endorsements.md");

  return (
    <div>
      <PageBanner
        title={"Endorsements"}
        img={bannerImage}
        imgPosition="50% 40%"
      />
      {/* <Endorsements /> */}
    </div>
  );
}
