import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

import Section from "../Section";
import VolunteerImage from "../../../public/uploads/icons/anarchy.svg";
import styles from "./styles.module.scss";

const CopyAndImage = ({
  img = VolunteerImage,
  children,
  imgPosition = "50% 50%",
  reverse = false,
  mobileReverse = false,
  imgStyle = "cover",
}: {
  img?: StaticImageData | string;
  children: ReactNode | ReactNode[];
  imgPosition?: string;
  reverse?: boolean;
  mobileReverse?: boolean;
  imgStyle?: "contain" | "cover";
}) => {
  const componentClass = () => {
    let classStr = styles.CopyAndImage;
    classStr += reverse ? ` ${styles.reverse}` : ``;
    classStr += mobileReverse ? ` ${styles.mobileReverse}` : ``;
    return classStr;
  };

  return (
    <div className={componentClass()}>
      <div className={styles.ImageBlock}>
        <div>
          <Image
            style={{ objectPosition: imgPosition, objectFit: imgStyle }}
            src={img}
            alt=""
            className={styles.img}
            priority
            fill
          />
        </div>
      </div>
      <div className={styles.CopyBlock}>{children}</div>
    </div>
  );
};

export default CopyAndImage;
