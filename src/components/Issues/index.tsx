"use client";
import React, { useEffect, useState } from "react";
import client from "../../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import Section from "@/components/Section";
import Accordion from "@/components/Accordion";

type IIssue = {
  title: string;
  icon: string;
  body: any;
  order: number;
};

const Issues = () => {
  const [issues, setIssues] = useState<IIssue[]>([]);
  useEffect(() => {
    const fetchIssues = async () => {
      const allIssues = await client.queries.issueConnection();
      if (allIssues?.data?.issueConnection?.edges) {
        const fetchedIssues = allIssues?.data?.issueConnection?.edges
          .filter((issue) => !!issue?.node?.order)
          //@ts-ignore
          .sort((a, b) => a?.node?.order - b?.node?.order)
          .map((longIssue) => {
            return {
              title: longIssue?.node?.title,
              icon: longIssue?.node?.icon,
              body: longIssue?.node?.teaserText,
            };
          });
        // @ts-ignore
        setIssues(fetchedIssues);
      }
    };
    fetchIssues();
  }, []);

  return (
    <Section>
      {issues.map((issue) => (
        <Accordion key={issue.title} title={issue.title} icon={issue.icon}>
          <TinaMarkdown content={issue.body} />
        </Accordion>
      ))}
    </Section>
  );
};

export default Issues;
