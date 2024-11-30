import GetInvolvedForm from "@/components/GetInvolvedForm";
import PageBanner from "@/components/PageBanner";
import Section from "@/components/Section";
import Link from "next/link";
import React from "react";

const JoinUs = () => {
  return (
    <>
      <PageBanner title={"Join the Louder Transition Collective"} />
      <Section>
        <h2>Currently Seeking musicians and other help</h2>
        <p>
          As mentioned on the home page, this project is just getting off the
          ground with <Link href="/members">Rebel Rabbit Alex</Link> writing,
          playing, and recording guitar, bass, and vocals.{" "}
          <Link href="/members">Rebel Rabbit Alex</Link> is also managing all
          web work and social media. <b>You&apos;re help is needed!</b>
        </p>
        <p>
          All songs are not even demo ready. They have starter guitar and bass
          tracks while completely lacking drum tracks. Help is needed on all
          fronts.
        </p>
        <p>So, what do you say?</p>
      </Section>
      <Section>
        <h3>
          Fill out the form below if you&apos;d like to get involved in ANY
          capacity
        </h3>

        <GetInvolvedForm />
      </Section>
    </>
  );
};

export default JoinUs;
