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
      <h2>The issues</h2>
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
