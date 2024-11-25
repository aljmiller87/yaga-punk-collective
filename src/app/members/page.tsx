import React from "react";

// Components
import CopyAndImage from "@/components/CopyAndImage";
import PageBanner from "@/components/PageBanner";
import Socials, { ISocial } from "@/components/Socials";

// Styles
import styles from "./styles.module.scss";
import AlexImg from "../../../public/uploads/images/rebelrabbitalex-profile.jpg";

export default async function AboutUs() {
  // const {
  //   data: {
  //     pages: { bannerImage, title, bodyText },
  //   },
  // } = await getPageData("About-No-Zen.md");
  // const bandMembers = await getBandMembers();

  return (
    <>
      <PageBanner title={"Members of Louder Transition Collective"} />

      <CopyAndImage img={AlexImg as unknown as string} imgPosition="center top">
        <h2>Rebel Rabbit Alex</h2>
        <p>
          Legend has it that, long before the rise of electric guitars and the
          roaring crowds of the underground, there was a punk rock goddess named
          RebelRabbitAlex. Born from the stormy winds of rebellion and the
          crackling energy of forgotten gods, Rebel was said to be a force of
          pure chaos, embodying the spirit of defiance in all its raw, untamed
          glory. She emerged from the shattered remnants of ancient temples, her
          voice an unholy screech that rattled the heavens. With a guitar forged
          from the bones of fallen angels and strings made of lightning, she
          unleashed songs that could topple empires and set fire to cities.
          Revered by the outcasts and feared by the ruling powers, Rebel became
          the patron saint of all who lived on the fringe, her legend
          immortalized in the rhythms of rebellion and the lyrics of freedom.
        </p>
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
