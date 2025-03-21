import React from "react";

// Components
import CopyAndImage from "@/components/CopyAndImage";
import PageBanner from "@/components/PageBanner";
import Socials, { ISocial } from "@/components/Socials";

// Styles
import styles from "./styles.module.scss";
import AlexImg from "../../../public/uploads/images/members/rebelrabbitalex-profile.jpg";
import ImmiImg from "../../../public/uploads/images/immi-profile.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Louder Transition Members",
  description: "Charlotte Queer Anarcho Punk",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Rebel Rabbit Alex",
  publisher: "Rebel Rabbit Alex",

  keywords: ["Louder Transition Members"],
  themeColor: "#0F8185",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://wwww.loudertransition.com",
    title: "Louder Transition",
    description: "Charlotte Queer Anarcho Punk",
    siteName: "Louder Transition",
    // images: [
    //   {
    //     url: ".jpeg",
    //   },
    // ],
  },
};

export default async function AboutUs() {
  return (
    <>
      <PageBanner title={"Members of Louder Transition"} />

      <CopyAndImage img={AlexImg as unknown as string} imgPosition="center top">
        <h2>Rebel Rabbit Alex</h2>
        <p>
          <b>LTC Role</b>: Vocalist, songwriter, front woman
        </p>
        <p>
          Rebel Rabbit is a 37 year old transgender woman who has loved punk
          rock since she was 16. It all started when she was building WW2
          airplane models in her parents unfinished basement - trust me she was
          really cool in high school - and put on Pennywise&apos;s Full Circle
          for the first time. Rebel Rabbit was blown away and never turned back.
        </p>
        <p>
          Rebel Rabbit was always political. In college, she worked with various
          drug reform policy groups and helped organize &quot;Know Your
          Rights&quot; training. She was also involved in political groups
          ranging from &quot;Students for Liberty&quot; to &quot;Students for a
          Democratic Society.&quot;
        </p>
        <p>
          After college, life slowed down for Rebel Rabbit as she got married
          and had kids. She was still social and even cofounded (a now defunct)
          Alliance of the Libertarian Left chapter in Austin, TX. After Rebel
          Rabbit came out, she got heavily involved in LGBT non profit
          volunteering at community centers and donating web work (what she does
          professionally).
        </p>
        <p></p>
        <div className={styles.socialContainer}>
          <Socials
            socials={
              [
                {
                  platform: "facebook",
                  url: "https://www.facebook.com/RebelRabbits2",
                },
                {
                  platform: "instagram",
                  url: "https://www.instagram.com/rebel_rabbit_alex/",
                },
                {
                  platform: "tiktok",
                  url: "https://www.instagram.com/rebel_rabbit_alex/",
                },
              ] as ISocial[]
            }
          />
        </div>
      </CopyAndImage>
      <CopyAndImage img={ImmiImg as unknown as string} imgPosition="center top">
        <h2>Immi Embers</h2>{" "}
        <p>
          <b>LTC Role</b>: producer, guitarist, songwriter, vocalist
        </p>
        <p>
          Immi Embers is a 27-year-old transgender woman, musician, and
          emotional activist dedicated to creating art that heals and inspires.
          As a producer, guitarist, songwriter, vocalist, and director, Immi
          brings a unique blend of creativity, passion, and activism to the
          music scene.
        </p>
        <p>
          A lifelong musician, Immi began exploring instruments at just 4 years
          old.. With an insatiable curiosity, she devoted herself to studying
          the intricacies of her favorite music, seeking to understand what
          makes it resonate with people. This dedication has paid off in spades,
          as Immi&apos;s unique voice and perspective have earned her a
          respected place in her field.
        </p>
        <p>
          With a rich musical history that includes stints with When I Say Jump,
          Angels Among Ashes, and Cicero, Immi has honed her craft and developed
          a distinctive sound that blends emotional intensity with infectious
          energy. Her music is a testament to the power of art to transform,
          uplift, and connect people.
        </p>
        <p>
          Through her work with Louder Transition Collective, Immi aims to
          create a sense of community and belonging among marginalized voices,
          promoting empathy, understanding, and acceptance. With her music, she
          hopes to inspire healing, resilience, and hope - and to empower others
          to do the same.
        </p>
        <div className={styles.socialContainer}>
          <Socials
            socials={
              [
                {
                  platform: "linktree",
                  url: "linktr.ee/immiembers",
                },
              ] as ISocial[]
            }
          />
        </div>
      </CopyAndImage>
      {/* ))}  */}
    </>
  );
}
