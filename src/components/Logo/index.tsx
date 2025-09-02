import React from "react";
import Image from "next/image";
import Img from "../../../public/uploads/icons/anarchy.svg";
import styles from "./logo.module.scss";

const Logo = ({ variant }: { variant: "light" | "dark" }) => {
  const path = `/logos/`;

  return (
    <a href="/" className={styles.Logo}>
      <Image
        src={Img}
        alt="Yaga Punk Collective Logo - Anarchy Symbol"
        layout={"fill"}
        objectFit={"contain"}
        priority
      />
    </a>
  );
};

export default Logo;
