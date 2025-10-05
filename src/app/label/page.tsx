import React from "react";
import PageBanner from "@/components/PageBanner";
import PageSummary from "@/components/PageSummary";
import Section from "@/components/Section";
import CopyAndImage from "@/components/CopyAndImage";
import Button from "@/components/Button";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getAllBands, IBand } from "@/utils/bands";
import client from "../../../tina/__generated__/client";

export default async function LabelPage() {
  const bands = getAllBands();

  let labelPageContent;
  try {
    const response = await client.queries.labelPage({
      relativePath: "index.md",
    });
    labelPageContent = response.data.labelPage;
  } catch (error) {
    console.error("Error fetching label page content:", error);
    return (
      <div>
        <PageBanner title="Label Page" />
        <p>
          Content not found. Please create the labelPage content in TinaCMS.
        </p>
      </div>
    );
  }

  return (
    <>
      <PageBanner title={labelPageContent.title || "Label Page"} />
      <PageSummary summary={labelPageContent.summary} />
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
                <div style={{ marginTop: "1.5rem" }}>
                  <Button href={band.link} variant="secondary">
                    Listen
                  </Button>
                </div>
              )}
            </CopyAndImage>
          </div>
        ))}
      </Section>
    </>
  );
}
