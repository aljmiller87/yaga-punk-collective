import React from "react";
import Link from "next/link";
import sectionStyles from "../Section/section.module.scss";

const Disclaimer = () => {
  return (
    <>
      <h3>Disclaimer:</h3>
      <p className={sectionStyles.large}>
        Louder Transition is a hardcore anarcho-punk band from Charlotte, NC.
        The project was recently started by{" "}
        <Link href={"/members"}>Rebel Rabbit Alex</Link> who is looking for a
        guitarist, bassist, and drummer to join. Currently, all bass, guitar,
        and vocals are produced by Rebel who has the hope others will join to
        make new songs as well as improve existing ones.
      </p>
      <p className={sectionStyles.large}>
        You&apos;ll notice that the songs as the exist are not demo ready.
        Firstly, they&apos;re lacking drum tracks which are beyond Rebel&apos;s
        ability. Secondly, one track is missing bass. Thirdly, everything has
        been thus far recorded on relatively cheap equipment in Rebel&apos;s
        house. The current state of these songs is only a reflection of the
        sound and direction Rebel would like to take the band.
      </p>
    </>
  );
};

export default Disclaimer;
