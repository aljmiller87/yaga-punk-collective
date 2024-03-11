import React from "react";
import PageBanner from "@/components/PageBanner";
import Issues from "@/views/home/issues";
import BannerImg from "../../../public/assets/images/uaw-strike1.jpg";
import Section from "@/components/Section";

const IssuesPage = () => {
  return (
    <div>
      <PageBanner title="On the Issues" img={BannerImg} imgPosition="50% 38%" />
      <Section>
        <p>
          Like most folks in the 4th District, I&apos;m tired of the team sports
          element of politics—pitting neighbor against neighbor, us vs. them.
        </p>
        <p>
          That&apos;s why I&apos;m focused on the day-to-day,
          boots-on-the-ground issues that bring us together, not the divisive
          culture war policies that would rip our community apart.
        </p>
        <p>
          I believe this platform will help us get past the hatred, the
          division, and the mean-spiritedness that has plagued our politics and{" "}
          <b>move Lexington forward together.</b>
        </p>
      </Section>
      <Issues />
    </div>
  );
};

export default IssuesPage;
