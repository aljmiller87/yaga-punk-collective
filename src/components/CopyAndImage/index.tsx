import React from "react";
import Image from "next/image";

import Section from "../Section";
import VolunteerImage from "../../../public/assets/images/speaking-to-group.jpg";
import styles from "./styles.module.scss";

const CopyAndImage = () => {
  return (
    <Section>
      <div className={styles.CopyAndImage}>
        <div className={styles.ImageBlock}>
          <div>
            <Image
              src={VolunteerImage}
              alt="Emma Curtis"
              className={styles.img}
              priority
            />
          </div>
        </div>
        <div className={styles.CopyBlock}>
          <h2>You can help us to Bring the Change that we need</h2>
          <p>
            I&apos;m baby wolf slow-carb keytar forage big mood messenger bag.
            Air plant pinterest poutine, iceland selvage brunch synth.
            Meditation tumblr bicycle rights offal, authentic four dollar toast
            lyft banh mi celiac solarpunk truffaut tote bag mlkshk craft beer.
          </p>
          <p>
            Chillwave tote bag hexagon asymmetrical. Pop-up church-key selfies
            pok pok, shaman pabst celiac fingerstache. Fashion axe semiotics
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
        </div>
      </div>
    </Section>
  );
};

export default CopyAndImage;
