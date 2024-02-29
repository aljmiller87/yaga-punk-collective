import React, { ReactNode, useState } from "react";
import Image from "next/image";
import styles from "./accordion.module.scss";
import { ReactComponent as Chevron } from "../../../public/assets/svgs/chevron.svg";

const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode | ReactNode[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenBodyClass = isOpen
    ? `${styles.body} ${styles.isOpen} `
    : styles.body;
  const isOpenIconClass = isOpen
    ? `${styles.icon} ${styles.isOpen} `
    : styles.icon;
  return (
    <div className={styles.Accordion}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <div className={isOpenIconClass}>
          <Image
            priority
            alt={`Click to read more about ${title}`}
            src="./assets/svgs/chevron.svg"
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
