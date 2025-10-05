import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import ReactMarkdown from "react-markdown";
import styles from "./styles.module.scss";
import Section from "../Section";

interface PageSummaryProps {
  summary?: any; // TinaCMS rich-text content or string
  title?: string;
}

const PageSummary: React.FC<PageSummaryProps> = ({ summary, title }) => {
  if (!summary) {
    return null;
  }

  // Handle plain string (from YAML with | or > format)
  if (typeof summary === "string") {
    return (
      <div className={styles.PageSummary}>
        <div className={styles.container}>
          {title && <h2>{title}</h2>}
          <ReactMarkdown>{summary}</ReactMarkdown>
        </div>
      </div>
    );
  }

  // Handle rich-text object from Tina (if it has children and is not empty)
  if (
    summary.type === "root" &&
    summary.children &&
    summary.children.length > 0
  ) {
    return (
      <Section isSummary={true}>
        {title && <h2>{title}</h2>}
        <TinaMarkdown content={summary} />
      </Section>
    );
  }

  // Summary is empty
  return null;
};

export default PageSummary;
