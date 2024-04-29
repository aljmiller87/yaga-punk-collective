"use client";
import React, { useEffect, useState } from "react";
import client from "../../../tina/__generated__/client";
import { StaticImageData } from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import CopyAndImage from "../CopyAndImage";

import styles from "./styles.module.scss";
type IEndorsement = {
  title: string;
  image: StaticImageData;
  url: string;
  body: any;
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
    <div className={styles.Endorsements}>
      {endorsements.map((endorsement, index) => (
        <CopyAndImage
          key={endorsement.title}
          reverse={index % 2 === 1}
          img={endorsement.image}
        >
          <h2>{endorsement.title}</h2>
          <TinaMarkdown content={endorsement.body} />
          <p>
            <a href={endorsement.url}>See More...</a>
          </p>
        </CopyAndImage>
      ))}
    </div>
  );
};

export default Endorsements;
