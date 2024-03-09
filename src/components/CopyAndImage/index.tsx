import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

import Section from "../Section";
import VolunteerImage from "../../../public/assets/images/speaking-to-group.jpg";
import styles from "./styles.module.scss";

const CopyAndImage = ({
  img = VolunteerImage,
  children,
  imgPosition = "50% 50%",
}: {
  img?: StaticImageData;
  children: ReactNode | ReactNode[];
  imgPosition?: string;
}) => {
  return (
    <Section>
      <div className={styles.CopyAndImage}>
        <div className={styles.ImageBlock}>
          <div>
            <Image
              style={{ objectPosition: imgPosition }}
              src={img}
              alt="Emma Curtis"
              className={styles.img}
              priority
            />
          </div>
        </div>
        <div className={styles.CopyBlock}>{children}</div>
      </div>
    </Section>
  );
};

export default CopyAndImage;
