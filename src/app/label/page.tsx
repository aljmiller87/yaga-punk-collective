import React from "react";
import PageBanner from "@/components/PageBanner";
import Section from "@/components/Section";
import CopyAndImage from "@/components/CopyAndImage";
import IMG_1 from "../../../public/uploads/images/yaga-punk-collective-hero.jpg";
import Button from "@/components/Button";

export default function LabelPage() {
  return (
    <>
      <PageBanner title="Music Label" />
      <Section>
        <h2>About Yaga Punk Collective Label</h2>
        <p>
          Born from basement shows, busted amps, and a deep love for raw sound,
          our DIY punk rock label exists to amplify the voices that refuse to be
          polished. We&apos;re not here for industry trends or algorithmic
          hits—we&apos;re here for the sweat, the noise, and the spirit that
          fuels underground scenes across the globe. Whether it&apos;s cassette
          tapes dubbed in a garage or zines stapled at 3 a.m., we believe in
          doing it ourselves and doing it loud.
        </p>
        <p>
          We&apos;re a collective of misfits, musicians, and zinesters pushing
          back against the sanitized and the safe. Our label is a home for
          artists who value authenticity over perfection, who&apos;d rather play
          to five real fans than chase a million fake streams. If you&apos;ve
          got something to say and the guts to scream it, we&apos;ve got your
          back.
        </p>
      </Section>
      <Section>
        <CopyAndImage
          img={IMG_1}
          reverse={false}
          imgStyle="contain"
          imgPosition="center"
        >
          <h2>The Cement Kittens</h2>
          <p>
            Formed in the crumbling backrooms of a condemned bowling alley in
            Akron, Ohio, The Cement Kittens are what happens when sarcasm, rage,
            and three chords collide. Known for their chaotic live sets,
            impromptu soapbox rants, and questionable gear setups, they&apos;ve
            built a cult following that thrives on duct tape aesthetics and
            broken strings.
          </p>
          <p>
            With influences ranging from Crass to Bikini Kill, the Kittens spit
            out anthems about late-stage capitalism, pet adoption, and
            alienation in small-town America. Their debut EP “Litter Box
            Politics” was recorded in a single take on a borrowed Tascam and
            distributed entirely on spray-painted CD-Rs.
          </p>
          <p>
            <a href="www.google.com">Listen</a>
          </p>
        </CopyAndImage>
        <CopyAndImage
          img={IMG_1}
          reverse={true}
          imgStyle="contain"
          imgPosition="center"
        >
          <h2>Broken Youth Authority</h2>
          <p>
            Broken Youth Authority formed in a crumbling Midwestern town where
            the only thing louder than the freight trains was the boredom. The
            four-piece cut their teeth playing abandoned basements and parking
            lots, channeling the frustration of dead-end jobs, closed-down
            schools, and the looming threat of “growing up.” Their music is
            fast, jagged, and unpolished—like if Black Flag and FIDLAR got in a
            fistfight behind a liquor store.
          </p>
          <p>
            Refusing to “clean up” for the industry, they self-record everything
            on secondhand tape decks and design their own gritty zines to hand
            out at shows. For them, punk isn’t just music—it’s survival. Their
            fanbase is a revolving door of disillusioned kids who finally hear
            someone screaming the words they’ve been choking on.
          </p>
          <p>
            <a href="www.google.com">Listen</a>
          </p>
        </CopyAndImage>
        <CopyAndImage
          img={IMG_1}
          reverse={false}
          imgStyle="contain"
          imgPosition="center"
        >
          <h2>Shattered Mirrors</h2>
          <p>
            The Shattered Mirrors started as a joke between two art-school
            dropouts but quickly evolved into one of the most unhinged bands on
            the underground circuit. They lean heavy into
            theatrics—spray-painted clothes, broken makeup mirrors smashed on
            stage, and cardboard props that fall apart mid-song. Their music is
            sharp, sarcastic, and chaotic, bouncing between hardcore breakdowns
            and bratty singalongs.
          </p>
          <p>
            Instead of pushing away mainstream pop, they cannibalize it—turning
            bubblegum choruses into screeching anthems. Every performance feels
            like a dare, like they’re taunting the audience to take punk less
            seriously while taking it more seriously at the same time.
          </p>
          <p>
            <a href="www.google.com">Listen</a>
          </p>
        </CopyAndImage>
      </Section>
    </>
  );
}
