"use client";
import React from "react";
import styles from "./footer.module.scss";
import Logo from "../Logo";
import Socials, { ISocial } from "../Socials";

const Footer = () => {
  const socials: ISocial[] = [
    {
      platform: "facebook",
      url: "www.facebook.com",
    },
    {
      platform: "instagram",
      url: "www.instagram.com",
    },
    {
      platform: "twitter",
      url: "www.twitter.com",
    },
    {
      platform: "tiktok",
      url: "www.tiktok.com",
    },
  ];

  return (
    <footer className={styles.footer}>
      <Logo variant="light" />
      <Socials socials={socials} />
      <p className={styles.copy}>This is the footer copy</p>
      <small>
        Website built by:{" "}
        <a
          href="https://www.alexmillerwebdev.com"
          aria-label="Website built by Alex Miller. See more at alexmillerwebdev.com"
        >
          Alex Miller
        </a>
      </small>
    </footer>
  );
};

export default Footer;
