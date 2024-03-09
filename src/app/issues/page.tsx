import PageBanner from "@/components/PageBanner";
import Issues from "@/views/home/issues";
import React from "react";

const IssuesPage = () => {
  return (
    <div>
      <PageBanner title="On the Issues" />
      <Issues />
    </div>
  );
};

export default IssuesPage;
