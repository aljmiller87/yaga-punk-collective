"use client";
import React from "react";
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
        <a
          href="https://www.alexmillerwebdev.com"
          aria-label="Website built by Rebel Rabbit Alex. See more at alexmillerwebdev.com"
        >
          Rebel Rabbit Alex
        </a>
      </small>
    </footer>
  );
};

export default Footer;
