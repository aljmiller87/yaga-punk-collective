import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

// Components
import CopyAndImage from "@/components/CopyAndImage";
import PageBanner from "@/components/PageBanner";
import Section from "@/components/Section";
import Socials, { ISocial } from "@/components/Socials";

// Styles
import styles from "./styles.module.scss";

// Utils
import { getBandMembers, getPageData } from "../utils";

export default async function () {
  const {
    data: {
      pages: { bannerImage, title, bodyText },
    },
  } = await getPageData("About-No-Zen.md");
  const bandMembers = await getBandMembers();

  console.log(JSON.stringify(bodyText, null, 2));

  return (
    <>
      <PageBanner title={title} img={bannerImage} />
      <Section>
        <TinaMarkdown content={bodyText} />
      </Section>

      {bandMembers?.map((bandMember, index) => (
        <CopyAndImage
          key={index}
          img={bandMember?.image as string}
          reverse={index % 2 === 1}
        >
          {bandMember?.title && <h2>{bandMember?.title}</h2>}
          {bandMember?.body && <TinaMarkdown content={bandMember?.body} />}
          {bandMember?.socialMedia && (
            <div className={styles.socialContainer}>
              <Socials socials={bandMember?.socialMedia as ISocial[]} />
            </div>
          )}
        </CopyAndImage>
      ))}
    </>
  );
}
