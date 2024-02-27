import React from "react";
import Image from "next/image";
import styles from "./logo.module.scss";

const Logo = ({ version }: { version: number }) => {
  const path = `/assets/svgs/`;
  const file = version === 3 ? `logo-light.svg` : `logo.svg`;
  console.log(`${path}${file}`);
  return (
    <a href="/" className={styles.Logo}>
      <Image
        src={`${path}${file}`}
        alt="Emma Curtis for Council"
        //   className={styles.vercelLogo}
        layout={"fill"}
        objectFit={"contain"}
        priority
      />
    </a>
  );
};

export default Logo;
