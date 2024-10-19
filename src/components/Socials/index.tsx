import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Twitter from "./Twitter";
import Tiktok from "./Tiktok";

export type ISocial = {
  platform: "instagram" | "facebook" | "tiktok" | "twitter";
  url: string;
};
const Socials = ({
  isHeader = false,
  socials,
}: {
  isHeader?: boolean;
  socials: ISocial[];
}) => {
  const renderIcon = (platform: ISocial["platform"]) => {
    switch (platform) {
      case "facebook":
        return <Facebook />;
      case "instagram":
        return <Instagram />;
      case "twitter":
        return <Twitter />;
      case "tiktok":
        return <Tiktok />;

      default:
        return null;
    }
  };
  return (
    <nav className={`${styles.Socials} ${isHeader && styles.isHeader}`}>
      <p>Get in touch:</p>
      <ul>
        {socials?.map((social) => {
          return (
            <li key={social.url}>
              {" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={social.url}
                aria-label="facebook page"
              >
                {renderIcon(social.platform)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Socials;
