import React from "react";
import Image from "next/image";
import styles from "./logo.module.scss";

const Logo = ({ variant }: { variant: "light" | "dark" }) => {
  const path = `/assets/logos/`;

  return (
    <a href="/" className={styles.Logo}>
      <Image
        src={`${path}logo.png`}
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
