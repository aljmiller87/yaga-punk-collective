import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  inverse?: boolean;
  href?: string;
  type?: "submit" | "reset" | "button";
  onClick?: VoidFunction;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  inverse = false,
  href,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) => {
  const buttonClass = `${styles.Button} ${styles[variant]} ${
    inverse ? styles.inverse : ""
  } ${className}`.trim();

  // If href is provided, render as Link (for internal routes) or anchor (for external)
  if (href) {
    const isExternal =
      href.startsWith("http://") || href.startsWith("https://");

    if (isExternal) {
      return (
        <a
          href={href}
          className={buttonClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {children}
    </button>
  );
};

export default Button;
