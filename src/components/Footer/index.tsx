"use client";
import React from "react";
import styles from "./footer.module.scss";
import Logo from "../Logo";
import Socials from "../Socials";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo variant="light" />
      <Socials />
      <p className={styles.copy}>Paid for by Campaign Fund of Emma Curtis</p>
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
