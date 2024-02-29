import React from "react";
import Image from "next/image";
import styles from "./fullwidthimagecontent.module.scss";
import BgImg from "../../../public/assets/images/speaking-to-group.jpg";
import Input from "../Input";

const FullWidthImageContent = () => {
  return (
    <div className={styles.FullWidthImageContent}>
      <div className={styles.img}>
        <Image
          src={BgImg}
          alt="Emma Curtis"
          className={styles.img}
          fill={true}
        />
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>Join our campaign</h2>
        <p className={styles.subtitle}>Donate and/or Volunteer</p>
        <div className={styles.form}>
          <Input id="emailSignup" required />
          <button type="submit">Sign Up!</button>
        </div>
      </div>
    </div>
  );
};

export default FullWidthImageContent;
