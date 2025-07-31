import React from "react";
import { Metadata } from "next";

// Components
import CopyAndImage from "@/components/CopyAndImage";
import PageBanner from "@/components/PageBanner";
import Socials, { ISocial } from "@/components/Socials";

// Styles
import styles from "./styles.module.scss";
import AlexImg from "../../../public/uploads/images/members/rebelrabbitalex-profile.jpg";
import JaidenImg from "../../../public/uploads/images/members/jaidenjax.jpg";
import PhilImg from "../../../public/uploads/images/members/phil.jpg";
import FullWidthImageContent from "@/components/FullWidthImageContent";

export const metadata: Metadata = {
  title: "Members - Louder Transition Collective",
  description:
    "Meet the members of Louder Transition Collective: Rebel Rabbit Alex (vocals/guitar), James (drums), and Phillip (bass). Learn about Charlotte's queer anarcho punk band members and their stories.",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Rebel Rabbit Alex",
  publisher: "Rebel Rabbit Alex",
  keywords: [
    "Louder Transition Members",
    "Rebel Rabbit Alex",
    "LTC Band Members",
    "Charlotte Punk Musicians",
    "Queer Punk Band",
    "Anarcho Punk Musicians",
    "Transgender Musicians",
    "Punk Rock Band Members",
  ],
  themeColor: "#0F8185",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://wwww.loudertransition.com/members",
    title: "Members - Louder Transition Collective",
    description:
      "Meet the members of Louder Transition Collective: Rebel Rabbit Alex (vocals/guitar), James (drums), and Phillip (bass). Learn about Charlotte's queer anarcho punk band members and their stories.",
    siteName: "Louder Transition",
    images: [
      {
        url: "https://wwww.loudertransition.com/uploads/images/LTC-logo-w-text.png",
        width: 1200,
        height: 1200,
        alt: "Louder Transition Collective Logo - Anarcho Punk Band",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Members - Louder Transition Collective",
    description:
      "Meet the members of Louder Transition Collective: Rebel Rabbit Alex (vocals/guitar), James (drums), and Phillip (bass). Learn about Charlotte's queer anarcho punk band members and their stories.",
    images: [
      "https://wwww.loudertransition.com/uploads/images/LTC-logo-w-text.png",
    ],
  },
};

export default async function AboutUs() {
  return (
    <>
      <PageBanner title={"Members of Louder Transition"} />

      <CopyAndImage img={AlexImg as unknown as string} imgPosition="center top">
        <h2>Rebel Rabbit Alex</h2>
        <p>
          <b>LTC Role</b>: Vocalist, guitarist, songwriter, front woman
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
      <CopyAndImage>
        <h2>James</h2>
        <p>
          <b>LTC Role</b>: drummer
        </p>
        <p>Details coming soon!</p>
      </CopyAndImage>
      <CopyAndImage
        img={PhilImg as unknown as string}
        imgPosition="center center"
      >
        <h2>Phillip</h2>
        <p>
          <b>LTC Role</b>: Bassist
        </p>
        <p>Details coming soon!</p>
      </CopyAndImage>
      <CopyAndImage
        img={JaidenImg as unknown as string}
        imgPosition="center center"
      >
        <h2>Jaiden/Jax</h2>
        <p>
          <b>LTC Role</b>: Vocals
        </p>
        <p>
          (They/She/He — Genderfluid Lesbian, except for Pedro Pascal. He gets a
          pass.)
        </p>

        <p>
          I&apos;ve been in the music world since I was 12 — choir kid turned
          chaotic punk vocalist. Singing started as a survival tactic, a way to
          drown out the noise when I got thrown into the foster care system. It
          wasn&apos;t about chasing a dream. It was about staying grounded when
          everything else was falling apart.
        </p>

        <p>
          I grew up in Ohio and made the move to North Carolina at 18, looking
          for something—anything—that felt like mine. Music became that place. A
          kind of rebellion. A kind of home.
        </p>

        <p>
          {" "}
          I never planned on making it my whole life. But like everything I do,
          I threw myself in with no map and no plan — joined a band, barely
          knowing what the hell I was doing. Now, I wouldn&apos;t trade it for
          anything. The late-night sessions, the messy breakdowns, the
          breakthroughs, the noise, the sweat, the laughter… all of it.
        </p>

        <p>
          I&apos;ve found family in this band. We&apos;re not perfect, but
          we&apos;re loud. We&apos;re honest. We&apos;re trying. And I
          can&apos;t wait to keep growing with these weirdos and see where we
          end up next.
        </p>
      </CopyAndImage>
      <FullWidthImageContent />
      {/* ))}  */}
    </>
  );
}
