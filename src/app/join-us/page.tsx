import CopyAndImage from "@/components/CopyAndImage";
import PageBanner from "@/components/PageBanner";
import VolunteerForm from "@/components/VolunteerForm";
import React from "react";

const Volunteer = () => {
  return (
    <div>
      <PageBanner title="Join Us" />
      <CopyAndImage>
        <h2>You can help us to Bring the Change that we need</h2>
        <p>
          I&apos;m baby wolf slow-carb keytar forage big mood messenger bag. Air
          plant pinterest poutine, iceland selvage brunch synth. Meditation
          tumblr bicycle rights offal, authentic four dollar toast lyft banh mi
          celiac solarpunk truffaut tote bag mlkshk craft beer.
        </p>
        <p>
          Chillwave tote bag hexagon asymmetrical. Pop-up church-key selfies pok
          pok, shaman pabst celiac fingerstache. Fashion axe semiotics
          dreamcatcher tilde JOMO deep v marxism.
        </p>
        <ul>
          <li>
            <span>Need to be Strong and Honest</span>
          </li>
          <li>
            <span>To be dedicated</span>
          </li>
          <li>
            <span>Open minded</span>
          </li>
          <li>
            <span>LOVE Lexington</span>
          </li>
        </ul>
      </CopyAndImage>
      <VolunteerForm />
    </div>
  );
};

export default Volunteer;
