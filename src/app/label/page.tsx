import React from "react";
import PageBanner from "@/components/PageBanner";
import Section from "@/components/Section";
import CopyAndImage from "@/components/CopyAndImage";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getAllBands, IBand } from "@/utils/bands";
import { getLabelPageContent } from "@/utils/labelPage";

export default function LabelPage() {
  const bands = getAllBands();
  const labelPageContent = getLabelPageContent();

  return (
    <>
      <PageBanner title={labelPageContent.title} />
      <Section>
        <MarkdownRenderer content={labelPageContent.description} />
      </Section>
      <Section>
        {bands.map((band: IBand, index: number) => (
          <div
            key={band.id}
            style={{ marginBottom: index < bands.length - 1 ? "5rem" : "0" }}
          >
            <CopyAndImage
              img={band.picture}
              reverse={index % 2 === 1}
              imgStyle="contain"
              imgPosition="center"
            >
              <h2>{band.title}</h2>
              <MarkdownRenderer content={band.description} />
              {band.link && (
                <p>
                  <a href={band.link}>Listen</a>
                </p>
              )}
            </CopyAndImage>
          </div>
        ))}
      </Section>
    </>
  );
}
