import React from "react";
import PageBanner from "@/components/PageBanner";
import Section from "@/components/Section";
import { getPageData } from "../utils";
import Endorsements from "@/components/Endorsements";

export default async function IssuesPage() {
  const {
    data: {
      pages: { title, bannerImage, bodyText },
    },
  } = await getPageData("Issues.md");

  return (
    <div>
      <PageBanner
        title={"Endorsements"}
        img={bannerImage}
        imgPosition="50% 35%"
      />
      <Section>
        <Endorsements />
      </Section>
    </div>
  );
}
