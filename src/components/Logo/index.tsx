import React from "react";
import Image from "next/image";
import Img from "../../../public/uploads/images/yage-logo.png";
import styles from "./logo.module.scss";

const Logo = ({ variant }: { variant: "light" | "dark" }) => {
  const path = `/logos/`;

  return (
    <a href="/" className={styles.Logo}>
      <Image
        src={Img}
        alt="Yage Punk Collective Logo - Anarchy Symbol"
        layout={"fill"}
        objectFit={"contain"}
        priority
      />
    </a>
  );
};

export default Logo;
