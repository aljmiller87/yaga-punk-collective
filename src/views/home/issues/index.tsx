"use client";
import Section from "@/components/Section";
import React from "react";
import Traffic from "./Traffic";
import Housing from "./Housing";
import PublicSafety from "./PublicSafety";
import FairTaxation from "./FairTaxation";
import PublicTransit from "./PublicTransit";
import WorkerRights from "./WorkerRights";
import GunViolence from "./GunViolence";
import PublicEd from "./PublicEd";
import PublicParks from "./PublicParks";
import CivilRights from "./CivilRights";
import EconomicDevelopment from "./EconomicDevelopment";
import UrbanGrowth from "./UrbanGrowth";
import ReproductiveJustice from "./ReproductiveJustice";
import Environment from "./Environment";

const Issues = () => {
  return (
    <Section>
      <p>
        Like most folks in the 4th District, I'm tired of the team sports
        element of politics—pitting neighbor against neighbor, us vs. them.
      </p>
      <p>
        That's why I'm focused on the day-to-day, boots-on-the-ground issues
        that bring us together, not the divisive culture war policies that would
        rip our community apart.
      </p>
      <p style={{ marginBottom: "3rem;" }}>
        I believe this platform will help us get past the hatred, the division,
        and the mean-spiritedness that has plagued our politics and{" "}
        <b>move Lexington forward together.</b>
      </p>
      <Traffic />
      <Housing />
      <PublicSafety />
      <FairTaxation />
      <PublicTransit />
      <WorkerRights />
      <GunViolence />
      <PublicEd />
      <PublicParks />
      <CivilRights />
      <EconomicDevelopment />
      <UrbanGrowth />
      <ReproductiveJustice />
      <Environment />
    </Section>
  );
};

export default Issues;
