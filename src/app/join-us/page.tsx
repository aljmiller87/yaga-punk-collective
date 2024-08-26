import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageBanner from "@/components/PageBanner";
import Section from "@/components/Section";
import { getPageData } from "../utils";

export default async function Volunteer() {
  // const {
  //   data: {
  //     pages: { title, bannerImage, bodyText },
  //   },
  // } = await getPageData("JoinUs.md");

  return (
    <div>
      <h1>join us page</h1>
      {/* <PageBanner title={title} img={bannerImage} imgPosition="50% 35%" />
      <Section>
        <TinaMarkdown content={bodyText} />
      </Section> */}
    </div>
  );
}
