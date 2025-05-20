import React from "react";

// Components
import CopyAndImage from "@/components/CopyAndImage";
import PageBanner from "@/components/PageBanner";
import Socials, { ISocial } from "@/components/Socials";

// Styles
import styles from "./styles.module.scss";
import AlexImg from "../../../public/uploads/images/members/rebelrabbitalex-profile.jpg";
// import ImmiImg from "../../../public/uploads/images/immi-profile.jpg";
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

      {/* ))}  */}
    </>
  );
}
