import React from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./styles.module.scss";
import { formatDate } from "@/utils";

export type IBand = {
  name: string;
  url: string;
};

export type IEvent = {
  title: string;
  image: string | StaticImageData;
  date: string;
  description?: string;
  time?: string;
  ticketUrl?: string;
  venueUrl?: string;
  otherBands?: IBand[];
};
const Event = ({
  title,
  image,
  date,
  time,
  ticketUrl,
  description,
  venueUrl,
  otherBands = [],
}: IEvent) => {
  const formatttedDate = formatDate(new Date(date));
  return (
    <div className={styles.Event}>
      <a href="" className={styles["Event-image"]}>
        <Image src={image} alt="" className={styles.img} fill />
      </a>
      <div className={styles["Event-content"]}>
        <h3 className={styles["Event-title"]}>{title}</h3>
        {!!description && <p>{description}</p>}
        <div className={styles["Event-date"]}>
          {date && <p>{formatttedDate}</p>}
          {time && <p>{time}</p>}
        </div>
        {!!otherBands.length && (
          <p>
            Other bands:{" "}
            {otherBands.map((otherBand, index) => (
              <span key={index}>
                <a
                  href={otherBand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {otherBand.name}
                </a>{" "}
                &nbsp;
              </span>
            ))}
          </p>
        )}
      </div>
      <div className={styles["Event-buttons"]}>
        {!!venueUrl && (
          <a
            className="Btn-primary"
            href={venueUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Venue
          </a>
        )}
        {!!ticketUrl && (
          <a
            className="Btn-primary"
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tickets
          </a>
        )}
      </div>
    </div>
  );
};

export default Event;
