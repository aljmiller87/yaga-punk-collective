import CopyAndImage from "@/components/CopyAndImage";
import PageBanner from "@/components/PageBanner";
import VolunteerForm from "@/components/VolunteerForm";
import React from "react";

const Volunteer = () => {
  return (
    <div>
      <PageBanner title="Volunteer" />
      <CopyAndImage />
      <VolunteerForm />
    </div>
  );
};

export default Volunteer;
