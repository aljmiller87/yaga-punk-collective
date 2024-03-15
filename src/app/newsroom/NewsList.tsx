import React, { useEffect, useState } from "react";
import client from "../../../tina/__generated__/client";
import styles from "./styles.module.scss";
import Card from "@/components/Card";
import Section from "@/components/Section";

export type INewsItem = {
  title: string;
  url: string;
  img: string;
  teaser: string | null;
  venue: string;
  date: string;
};
const NewsList = () => {
  const [newsItems, setNewsItems] = useState<INewsItem[]>([]);
  useEffect(() => {
    const fetchNews = async () => {
      const allItems = await client.queries.newsItemsConnection();
      if (allItems?.data?.newsItemsConnection?.edges) {
        //@ts-ignore
        const newsItems: INewsItem[] =
          allItems?.data?.newsItemsConnection?.edges

            .map((item) => {
              return {
                title: item?.node?.title,
                url: item?.node?.url,
                img: item?.node?.image,
                teaser: item?.node?.teaserText,
                venue: item?.node?.venue,
                date: item?.node?.date,
              };
            })
            .filter((item) => item.date !== undefined)

            //@ts-ignore
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        setNewsItems(newsItems);
      }
    };
    fetchNews();
  }, []);

  return (
    <Section>
      <div className={styles.Cards}>
        {newsItems.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default NewsList;
