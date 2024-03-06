import React from "react";
import Image from "next/image";
import CardImg from "../../../public/assets/images/speaking-to-group.jpg";
import { ReactComponent as Arrow } from "../../../public/assets/svgs/arrow_right.svg";

import styles from "./styles.module.scss";

const Card = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.ImageWrapper}>
        <div className={styles.ImageBg} />
        <Image src={CardImg} alt="Emma Curtis" className={styles.img} fill />
      </div>
      <div className={styles.Content}>
        <div className={styles.Meta}>
          <div className={styles.Date}>
            <span>15</span>
            <span>Feb</span>
          </div>
          <div className={styles.Copy}>
            <h2>
              <a href="/">Emma Speaks at Fairness Rally</a>
            </h2>
            <p className={styles.Venue}>Kentucky Capital Rotunda</p>
          </div>
        </div>
        <p className={styles.Teaser}>
          To make sure all Citizen rights, you have to work together better
          country our for human rights
        </p>
        <a href="/">
          Read More{" "}
          <Image
            priority
            alt={`Click to read more about title`}
            src="./assets/svgs/arrow_right.svg"
            width={16}
            height={16}
          />
        </a>
      </div>
    </div>
  );
};

export default Card;
