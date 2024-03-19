import React from "react";
import PageBanner from "@/components/PageBanner";
import Issues from "@/components/Issues";
import BannerImg from "../../../public/assets/images/uaw-strike1.jpg";
import Section from "@/components/Section";
import { getPageData } from "../utils";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default async function IssuesPage() {
  const {
    data: {
      pages: { title, bannerImage, bodyText },
    },
  } = await getPageData("Issues.md");

  return (
    <div>
      <PageBanner title={title} img={bannerImage} imgPosition="50% 35%" />
      <Section>
        <TinaMarkdown content={bodyText} />
      </Section>
      <Issues />
    </div>
  );
}
