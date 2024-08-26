import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

import Section from "../Section";
import VolunteerImage from "../../../public/uploads/images/speaking-to-group.jpg";
import styles from "./styles.module.scss";

const CopyAndImage = ({
  img = VolunteerImage,
  children,
  imgPosition = "50% 50%",
  reverse = false,
  mobileReverse = false,
}: {
  img?: StaticImageData | string;
  children: ReactNode | ReactNode[];
  imgPosition?: string;
  reverse?: boolean;
  mobileReverse?: boolean;
}) => {
  const componentClass = () => {
    let classStr = styles.CopyAndImage;
    classStr += reverse ? ` ${styles.reverse}` : ``;
    classStr += mobileReverse ? ` ${styles.mobileReverse}` : ``;
    return classStr;
  };
  return (
    <Section>
      <div className={componentClass()}>
        <div className={styles.ImageBlock}>
          <div>
            <Image
              style={{ objectPosition: imgPosition }}
              src={img}
              alt="Emma Curtis"
              className={styles.img}
              priority
              fill
            />
          </div>
        </div>
        <div className={styles.CopyBlock}>{children}</div>
      </div>
    </Section>
  );
};

export default CopyAndImage;
