"use client";
import React, { useEffect, useState } from "react";
import client from "../../../tina/__generated__/client";
import Image, { StaticImageData } from "next/image";

import { TinaMarkdown } from "tinacms/dist/rich-text";

import Section from "@/components/Section";
import styles from "./styles.module.scss";
type IEndorsement = {
  image: string;
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
              return {
                image: longIssue?.node?.image,
              };
            }
          );
        // @ts-ignore
        setEndorsements(fetchedEndorsements);
      }
    };
    fetchEndorsements();
  }, []);

  return (
    <Section>
      <div className={styles.Endorsements}>
        {endorsements.map((endorsement) => (
          <div className={styles["Endorsements-item"]}>
            <Image
              style={{ objectPosition: "50% 50%" }}
              src={endorsement.image}
              alt="Emma Curtis"
              fill
              //   className={styles.img}
              priority
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Endorsements;
