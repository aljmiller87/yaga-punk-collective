import CopyAndImage from "@/components/CopyAndImage";
import PageBanner from "@/components/PageBanner";
import React from "react";
import anarchy from "../../../public/uploads/icons/anarchy.svg";
import squatter from "../../../public/uploads/icons/squatter.svg";
import copyLeft from "../../../public/uploads/icons/copy-left.svg";
import transLiberation from "../../../public/uploads/images/trans-liberation.jpg";
import openBorders from "../../../public/uploads/images/open-borders.jpg";
import { Metadata } from "next";
import FullWidthImageContent from "@/components/FullWidthImageContent";

export const metadata: Metadata = {
  title: "Values - Louder Transition Collective",
  description:
    "Explore the core values of Louder Transition Collective: anarchism, rejection of absentee ownership, copyleft, transgender liberation, and immigrant rights. Learn about our political philosophy and social justice mission.",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Rebel Rabbit Alex",
  publisher: "Rebel Rabbit Alex",
  keywords: [
    "Louder Transition Values",
    "Anarchism",
    "Transgender Liberation",
    "Immigrant Rights",
    "Open Borders",
    "Copyleft",
    "Anti-Capitalism",
    "Social Justice",
    "Queer Anarchism",
    "Mutual Aid",
    "Community Organizing",
  ],
  themeColor: "#0F8185",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://wwww.loudertransition.com/values",
    title: "Values - Louder Transition Collective",
    description:
      "Explore the core values of Louder Transition Collective: anarchism, rejection of absentee ownership, copyleft, transgender liberation, and immigrant rights. Learn about our political philosophy and social justice mission.",
    siteName: "Louder Transition",
    images: [
      {
        url: "https://wwww.loudertransition.com/public/uploads/images/LTC-logo-w-text.png",
      },
    ],
  },
};
const ValuesPage = () => {
  return (
    <>
      <PageBanner title={"Values of the Louder Transition"} />
      <CopyAndImage
        img={anarchy as unknown as string}
        imgPosition="center center"
        imgStyle="contain"
        // reveMrse={index % 2 === 1}
      >
        <h2>Anarchism</h2>
        <p>
          <b>Anarchism</b> is a{" "}
          <a
            href="https://en.wikipedia.org/wiki/Political_philosophy"
            title="Political philosophy"
          >
            political philosophy
          </a>{" "}
          and{" "}
          <a
            href="https://en.wikipedia.org/wiki/Political_movement"
            title="Political movement"
          >
            movement
          </a>{" "}
          that is against all forms of authority and seeks to abolish the
          institutions it claims maintain unnecessary coercion and{" "}
          <a
            href="https://en.wikipedia.org/wiki/Social_hierarchy"
            title="Social hierarchy"
          >
            hierarchy
          </a>
          , typically including the{" "}
          <a
            href="https://en.wikipedia.org/wiki/State_(polity)"
            title="State (polity)"
          >
            state
          </a>{" "}
          and{" "}
          <a href="https://en.wikipedia.org/wiki/Capitalism" title="Capitalism">
            capitalism
          </a>
          . Anarchism advocates for the replacement of the state with{" "}
          <a
            href="https://en.wikipedia.org/wiki/Stateless_society"
            title="Stateless society"
          >
            stateless societies
          </a>{" "}
          and voluntary{" "}
          <a
            href="https://en.wikipedia.org/wiki/Free_association_(communism_and_anarchism)"
            title="Free association (communism and anarchism)"
          >
            free associations
          </a>
          . A historically left-wing movement, anarchism is usually described as
          the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Libertarian"
            title="Libertarian"
          >
            libertarian
          </a>{" "}
          wing of the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Socialist_movement"
            title="Socialist movement"
          >
            socialist movement
          </a>{" "}
          (
          <a
            href="https://en.wikipedia.org/wiki/Libertarian_socialism"
            title="Libertarian socialism"
          >
            libertarian socialism
          </a>
          ).
        </p>
      </CopyAndImage>
      <CopyAndImage
        img={squatter as unknown as string}
        imgPosition="center center"
        reverse
        imgStyle="contain"
      >
        <h2>Rejection of Absentee Ownership</h2>
        <p>
          The rejection of absentee ownership stems from concerns over the
          social, economic, and ethical consequences of individuals or entities
          owning property or resources without actively engaging with or
          contributing to the local community. Absentee owners, who may live far
          from the properties they own, are often seen as prioritizing profit
          over the well-being of the people and places they invest in. This
          detachment can lead to neglect, reduced accountability, and a lack of
          investment in the maintenance and improvement of the property or
          surrounding area. In agriculture, for example, absentee landowners may
          fail to manage land sustainably, harming the environment or local
          economy. In urban areas, absentee landlords may neglect their
          properties, allowing them to fall into disrepair, which diminishes the
          quality of life for residents. This model of ownership is often
          criticized for exacerbating inequality, as it allows wealth to
          accumulate without providing tangible benefits to the community. Thus,
          the rejection of absentee ownership is rooted in a desire for more
          responsible, community-centered ownership models that promote
          stewardship, accountability, and long-term social and environmental
          well-being.
        </p>
      </CopyAndImage>
      <CopyAndImage
        img={copyLeft as unknown as string}
        imgPosition="center center"
        imgStyle="contain"
      >
        <h2>CopyLeft: Rejection of Intellectual Property</h2>
        <p>
          Copyleft is a concept in the realm of copyright law that promotes the
          idea of freely sharing and modifying creative works while ensuring
          that the same freedoms are preserved for others. Unlike traditional
          copyright, which restricts the use and redistribution of a work
          without permission, copyleft uses copyright law in a way that
          guarantees anyone who modifies or distributes the work must do so
          under the same open terms. The most famous example of copyleft is the
          GNU General Public License (GPL), which is used for open-source
          software. Under copyleft, users are free to copy, distribute, and
          alter the work, but any derivative works or redistributed versions
          must also be licensed under the same copyleft terms, ensuring that the
          work remains free and open for future generations. Essentially,
          copyleft allows creators to protect their rights while encouraging
          collaboration, sharing, and continuous improvement of creative works.
        </p>
      </CopyAndImage>
      <CopyAndImage
        img={transLiberation as unknown as string}
        imgPosition="center center"
        reverse
      >
        <h2>Transgender Liberation</h2>
        <p>
          Transgender liberation is the movement advocating for the rights,
          dignity, and freedom of transgender people, aiming to dismantle the
          social, political, and legal systems that oppress them. It seeks not
          only the recognition of gender identity but also the affirmation of
          transgender people&apos;s right to live authentically, without facing
          discrimination, violence, or stigma. Central to transgender liberation
          is the demand for equitable access to healthcare, education,
          employment, and housing, as well as legal protections that honor
          individuals&apos; self-identified genders. It challenges harmful norms
          surrounding gender, rejecting the binary framework that often
          marginalizes those who do not conform to traditional roles or
          expectations. Beyond legal equality, transgender liberation emphasizes
          cultural and societal change, advocating for broader acceptance,
          respect, and celebration of gender diversity. Ultimately, it envisions
          a world where all people, regardless of gender identity, can live free
          from oppression and fully participate in society without fear of
          marginalization or harm.
        </p>
      </CopyAndImage>
      <CopyAndImage
        img={openBorders as unknown as string}
        imgPosition="center center"
      >
        <h2>Immigrant Rights and Open Borders</h2>
        <p>
          Immigrant rights and open borders are rooted in the rejection of
          hierarchical structures that enforce separation and privileges.
          Borders are artificial divisions created to control movement, exploit
          labor, and maintain unequal power relations. By advocating for open
          borders, we aim to dismantle these structures of domination, allowing
          for the free movement of people across the world. Immigrant rights, in
          this context, are a vital part of ensuring that all
          individuals—regardless of their nationality or place of birth—are
          treated with dignity, equality, and autonomy. Rather than reinforcing
          the idea of national identity or citizenship as a means of exclusion,
          we promote solidarity across communities, recognizing that our
          collective well-being is better served when people can live freely and
          choose where they thrive without the fear of repression or
          displacement. Open borders, therefore, are not just about mobility;
          they are about rejecting arbitrary barriers to human freedom and
          fostering global cooperation based on mutual aid and shared
          responsibility.
        </p>
      </CopyAndImage>
      <FullWidthImageContent />
    </>
  );
};

export default ValuesPage;
