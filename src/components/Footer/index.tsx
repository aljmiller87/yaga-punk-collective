"use client";
import React from "react";
import TextLink from "../TextLink";
import styles from "./footer.module.scss";
import Logo from "../Logo";
import Socials, { ISocial } from "../Socials";

const Footer = () => {
  const socials: ISocial[] = [
    {
      platform: "facebook",
      url: "https://www.facebook.com/Yagepunkcollective/",
    },
    {
      platform: "email",
      url: "yagepunkcollective@tutamail.com",
    },
  ];

  return (
    <footer className={styles.footer}>
      <Logo variant="light" />
      <Socials socials={socials} />
      {/* <p className={styles.copy}>This is the footer copy</p> */}
      <small>
        Website built by:{" "}
        <TextLink
          label="Rebel Rabbit Alex"
          url="https://www.instagram.com/rebel_rabbit_alex/"
          variant="small"
        />{" "}
        of{" "}
        <TextLink
          label="Louder Transition Collective"
          url="https://www.instagram.com/louder_transition/"
          variant="small"
        />
      </small>
    </footer>
  );
};

export default Footer;
