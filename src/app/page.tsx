import Image from "next/image";
// import styles from "./page.module.css";
import "../styles/theme.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Section>
          <h2>About Emma</h2>
          <h3>The 93rd Deserves Another Champion</h3>
          <p>
            I’m a lifelong Kentuckian. I grew up on a tobacco farm that had been
            in my family for three generations. I’ve spent my entire life in and
            around Lexington, and I’m dedicated to the community I proudly call
            home.
          </p>
          <p>
            I’m not a politician—just somebody who cares about Kentucky. Rep.
            Lamin Swann was my mentor and my friend. He taught me that I didn’t
            have to stand on the sidelines, and showed me how I could become a
            leader in this fight.
          </p>
          <p>
            This moment calls for leaders. The reality is this: radical
            ideologues are running our government, Big Business is emptying our
            treasury, and South Lexington deserves a champion who will fight to
            restore the values we hold dear.
          </p>
          <p>
            Kentuckians are deeply good people, but our government does not
            represent us. We are going to win the 93rd District and send a
            message to Frankfort: we will <b>Defent the Bluegrass.</b>
          </p>
        </Section>
        <Section>
          <h2>Join us.</h2>
          <h3>Let's work & let's win</h3>
          <p>
            It’ll take all of us to defend Kentucky families and create a
            Commonwealth that we can be proud of.{" "}
          </p>
        </Section>
      </main>
    </div>
  );
}
