import React from "react";
import styles from "./styles.module.scss";

interface TextLinkProps {
  label: string;
  url: string;
  variant?: "small" | "large";
}

const TextLink: React.FC<TextLinkProps> = ({
  label,
  url,
  variant = "small",
}) => {
  // Check if URL is external (3rd party site)
  const isExternal = url.startsWith("http://") || url.startsWith("https://");

  const linkClass = `${styles.TextLink} ${
    variant === "large" ? styles.large : styles.small
  }`;

  return (
    <a
      href={url}
      className={linkClass}
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
      })}
    >
      {label}
    </a>
  );
};

export default TextLink;
