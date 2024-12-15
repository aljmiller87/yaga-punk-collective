import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Twitter from "./Twitter";
import Tiktok from "./Tiktok";
import Youtube from "./Youtube";

export type ISocial = {
  platform: "instagram" | "facebook" | "tiktok" | "twitter" | "youtube";
  url: string;
};
const Socials = ({
  isHeader = false,
  socials,
  label = "Get in touch:",
}: {
  isHeader?: boolean;
  socials: ISocial[];
  label?: string;
}) => {
  const renderIcon = (platform: ISocial["platform"]) => {
    switch (platform) {
      case "facebook":
        return <Facebook />;
      case "instagram":
        return <Instagram />;
      case "twitter":
        return <Twitter />;
      case "youtube":
        return <Youtube />;
      case "tiktok":
        return <Tiktok />;

      default:
        return null;
    }
  };
  return (
    <nav className={`${styles.Socials} ${isHeader && styles.isHeader}`}>
      <p>{label}</p>
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
