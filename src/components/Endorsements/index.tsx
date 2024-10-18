"use client";
import React, { useEffect, useState } from "react";
import client from "../../../tina/__generated__/client";
import Image, { StaticImageData } from "next/image";

import CopyAndImage from "../CopyAndImage";

import styles from "./styles.module.scss";
import Button from "../Button";
import Section from "../Section";
type IEndorsement = {
  title: string;
  image: StaticImageData;
  url: string;
  body: any;
  order: number;
};

const Endorsements = () => {
  const [endorsements, setEndorsements] = useState<IEndorsement[]>([]);
  useEffect(() => {
    const fetchEndorsements = async () => {
      const allEndorsements = await client.queries.endorsementsConnection();
      if (allEndorsements?.data?.endorsementsConnection?.edges) {
        const fetchedEndorsements =
          allEndorsements?.data?.endorsementsConnection?.edges.map(
            (longIssue) => {
              //   console.log(JSON.stringify(longIssue, null, 2));
              return {
                title: longIssue?.node?.title,
                image: longIssue?.node?.image,
                url: longIssue?.node?.url,
                body: longIssue?.node?.bodyText,
                order: longIssue?.node?.order,
              };
            }
          );
        // @ts-ignore
        setEndorsements(fetchedEndorsements);
        console.log(JSON.stringify(fetchedEndorsements, null, 2));
      }
    };
    fetchEndorsements();
  }, []);

  return (
    <Section className={styles.Endorsements}>
      {endorsements
        .sort((a, b) => a.order - b.order)
        .map((endorsement, index) => (
          <div key={endorsement.title} className={styles.ImageBlock}>
            <div>
              <Image
                src={endorsement.image}
                alt=""
                className={styles.img}
                priority
                fill
              />
            </div>
          </div>
        ))}
    </Section>
  );
};

export default Endorsements;
