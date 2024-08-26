import React, { ReactNode, useState } from "react";
import Image from "next/image";
import styles from "./accordion.module.scss";

const Accordion = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: string;
  children: ReactNode | ReactNode[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenBodyClass = isOpen
    ? `${styles.body} ${styles.isOpen} `
    : styles.body;
  const isOpenIconClass = isOpen
    ? `${styles.icon} ${styles.isOpen} `
    : styles.icon;

  const renderIcon = () => {
    if (!icon) return null;
    return (
      <Image
        priority
        alt={`Click to read more about ${title}`}
        src={icon}
        width={35}
        height={35}
      />
    );
  };
  return (
    <div className={styles.Accordion}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <h3>
          {renderIcon()}
          <span>{title}</span>
        </h3>
        <div className={isOpenIconClass}>
          <Image
            priority
            alt={`Click to read more about ${title}`}
            src={"./assets/icons/chevron.svg"}
            width={45}
            height={45}
          />
        </div>
      </button>
      <div className={isOpenBodyClass}>{children}</div>
    </div>
  );
};

export default Accordion;
