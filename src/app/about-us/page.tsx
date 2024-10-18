import React from "react";
import PageBanner from "@/components/PageBanner";
import CopyAndImage from "@/components/CopyAndImage";
import { getPageData } from "../utils";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default async function () {
  const {
    data: {
      pages: { bannerImage, title, bodyText, pageBlocks },
    },
  } = await getPageData("About-Us.md");

  return (
    <div>
      <PageBanner title={title} img={bannerImage} imgPosition="50% 15%" />
      {pageBlocks?.map((block, index) => (
        <CopyAndImage
          key={index}
          img={block?.image as string}
          reverse={index % 2 === 1}
        >
          {block?.header && <h2>{block?.header}</h2>}
          {block?.description && <TinaMarkdown content={block?.description} />}
        </CopyAndImage>
      ))}
    </div>
  );
}
