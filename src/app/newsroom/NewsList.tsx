import React from "react";
import styles from "./styles.module.scss";
import Card from "@/components/Card";
import Section from "@/components/Section";
const NewsList = () => {
  return (
    <Section>
      <div className={styles.Cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Section>
  );
};

export default NewsList;
