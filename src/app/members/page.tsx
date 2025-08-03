import React from "react";
import { Metadata } from "next";

// Components
import CopyAndImage from "@/components/CopyAndImage";
import PageBanner from "@/components/PageBanner";
import Socials, { ISocial } from "@/components/Socials";
import MarkdownRenderer from "@/components/MarkdownRenderer";

// Utils
import { getAllBandMembers, IBandMember } from "@/utils/bandMembers";

// Styles
import styles from "./styles.module.scss";
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
  const bandMembers = getAllBandMembers();

  return (
    <>
      <PageBanner title={"Members of Louder Transition"} />

      {bandMembers.map((member: IBandMember) => (
        <CopyAndImage
          key={member.id}
          img={member.image}
          imgPosition="center top"
        >
          <h2>{member.title}</h2>
          <p>
            <b>LTC Role</b>: {member.role}
          </p>
          {member.pronouns && <p>Pronouns: {member.pronouns}</p>}

          <MarkdownRenderer content={member.bio} />

          {member.socialMediaUrls && member.socialMediaUrls.length > 0 && (
            <div className={styles.socialContainer}>
              <Socials
                socials={
                  member.socialMediaUrls.map((social) => ({
                    platform: social.platform as any,
                    url: social.url,
                  })) as ISocial[]
                }
              />
            </div>
          )}
        </CopyAndImage>
      ))}

      <FullWidthImageContent />
    </>
  );
}
