"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// import client from "../../../tina/__generated__/client";
import Image, { StaticImageData } from "next/image";
import Section from "../Section";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.scss";
type IEndorsement = {
  title: string;
  image: StaticImageData;
  url: string;
  body: any;
  order: number;
};

const EndorsementsCarousel = () => {
  const [endorsements, setEndorsements] = useState<IEndorsement[]>([]);
  // useEffect(() => {
  //   const fetchEndorsements = async () => {
  //     const allEndorsements = await client.queries.endorsementsConnection();
  //     if (allEndorsements?.data?.endorsementsConnection?.edges) {
  //       const fetchedEndorsements =
  //         allEndorsements?.data?.endorsementsConnection?.edges.map(
  //           (longIssue) => {
  //             //   console.log(JSON.stringify(longIssue, null, 2));
  //             return {
  //               title: longIssue?.node?.title,
  //               image: longIssue?.node?.image,
  //               url: longIssue?.node?.url,
  //               body: longIssue?.node?.bodyText,
  //               order: longIssue?.node?.order,
  //             };
  //           }
  //         );
  //       // @ts-ignore
  //       setEndorsements(fetchedEndorsements);
  //       console.log(JSON.stringify(fetchedEndorsements, null, 2));
  //     }
  //   };
  //   fetchEndorsements();
  // }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section className={styles.Carousel}>
      <h2>Endorsements</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {endorsements
            .sort((a, b) => a.order - b.order)
            .map((endorsement, index) => (
              <div key={endorsement.title} className={styles["Carousel-slide"]}>
                <Image
                  src={endorsement.image}
                  alt=""
                  className={styles.img}
                  priority
                  fill
                />
              </div>
            ))}
        </Slider>
      </div>
    </Section>
  );
};

export default EndorsementsCarousel;
