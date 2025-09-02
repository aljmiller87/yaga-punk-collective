import React from "react";
import Link from "next/link";
import sectionStyles from "../Section/section.module.scss";

const Disclaimer = () => {
  return (
    <>
      <h3>Disclaimer:</h3>
      <p className={sectionStyles.large}>
        Yaga Punk Collective is a hardcore anarchist punk collective from
        Charlotte, NC. The project was recently started by{" "}
        <Link href={"/about-jared"}>collective members</Link> who are looking
        for musicians, artists, and community organizers to join. Currently, all
        recordings are produced by collective members who hope others will join
        to make new songs as well as improve existing ones.
      </p>
      <p className={sectionStyles.large}>
        You&apos;ll notice that the songs as they exist are not demo ready.
        Firstly, they&apos;re lacking full drum tracks which are beyond our
        current abilities. Secondly, some tracks are missing bass. Thirdly,
        everything has been recorded on relatively simple equipment in home
        studios. The current state of these songs is only a reflection of the
        sound and direction we would like to take the collective.
      </p>
    </>
  );
};

export default Disclaimer;
