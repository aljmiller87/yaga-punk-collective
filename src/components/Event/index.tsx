import React from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./styles.module.scss";
import { formatDate } from "@/utils";

export type IEvent = {
  title: string;
  image: StaticImageData;
  date: string;
  //   time: string;
  ticketUrl: string;
};
const Event = ({ title, image, date, ticketUrl }: IEvent) => {
  const formatttedDate = formatDate(new Date(date));
  return (
    <div className={styles.Event}>
      <a href="" className={styles["Event-image"]}>
        <Image src={image} alt="" className={styles.img} fill />
      </a>
      <div className={styles["Event-content"]}>
        <h2 className={styles["Event-title"]}>{title}</h2>
        <div className={styles["Event-date"]}>
          {date && <p>{formatttedDate}</p>}
          {/* {time && <p>{time}</p>} */}
        </div>
      </div>
      <div className={styles["Event-buttons"]}>
        <a className="Btn-primary" href={ticketUrl}>
          Tickets
        </a>
      </div>
    </div>
  );
};

export default Event;
