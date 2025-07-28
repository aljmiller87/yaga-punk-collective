import React from "react";
import PageBanner from "@/components/PageBanner";
import Accordion from "@/components/Accordion";
import Section from "@/components/Section";
import AudioPlayer from "@/components/AudioPlayer";
import { Metadata } from "next";
import Socials, { ISocial } from "@/components/Socials";
import VideoPlayer from "@/components/VideoPlayer";

export const metadata: Metadata = {
  title: "Louder Transition Discography",
  description: "Charlotte Queer Anarcho Punk",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Rebel Rabbit Alex",
  publisher: "Rebel Rabbit Alex",

  keywords: ["Louder Transition Discography", "Louder Transition music"],
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

const nozenSocials: ISocial[] = [
  {
    platform: "instagram",
    url: "https://www.instagram.com/nozen_punk/",
  },
];

const Music = () => {
  return (
    <>
      <PageBanner title={"Louder Transition Demos (and Lyrics)"} />
      <Section>
        <Accordion title="On Being Used">
          <AudioPlayer file="On-Being-Used.mp3" />
          <p>
            What&apos;s the matter, Tranny faggot?
            <br />
            Why are you so depressed?
            <br />
            Should be fucking grateful
            <br />
            That we even grant you sex.
            <br />
            Rich girls will fuck me,
            <br />
            In their lakeside mansion,
            <br />
            But it&apos;s never real,
            <br />
            Just their sport of expansion.
            {/* <br />
            Go back to your spouse, to your mom and dad.
            <br />
            Laugh about the tranny that you had. */}
          </p>
          <p>
            A story on being used <br />
            On being used <br />
            On being used <br />
            On being used
          </p>
          <p>
            Said I was the best thing
            <br />
            To ever happen to you.
            <br />
            But in my dark times,
            <br />
            Was other lovers you ran to.
            <br />
            I&amp;m sorry I&amp;m an addict,
            <br />
            Still a struggle that I face.
            <br />
            Guess I was a fucking fool,
            <br />
            For thinking I could take up space.
          </p>{" "}
          <p>
            A story on being used <br />
            On being used <br />
            On being used <br />
            On being used
          </p>
          <p>
            Passionate, generous, always to a fault.
            <br />
            Despite all the times getting kicked to the asphalt.
            <br />
            Through it all, I still can&apos;t bring myself to ever hate you.
            <br />
            One day I&apos;ll love myself as much as…
          </p>
          <p>
            I loved you.
            <br />
            I loved you.
            <br />
            I loved you.
            <br />A story on being used.
          </p>
          <p>
            A sexual novelty,
            <br />
            You called me a friend.
            <br />
            But that never adds up,
            <br />
            Ever in the end.
            {/* I&apos;m sorry I&apos;m an addict, still a struggle that I face.
            <br />
            Guess I&apos;m a fool for thinking I could take up space.
            A fuckin&apos; relapse won&apos;t stop progress. */}
            <br />
            Fuck it all, no regrets. Heal the wounds of the past.
            <br />
            One day I&apos;ll find something... something that gives back!
          </p>
          <p>
            A story on being used <br />
            On being used <br />
            On being used <br />
            On being used
          </p>
        </Accordion>
        <Accordion title="Rent Is Theft">
          <AudioPlayer file="Rent-Is-Theft.mp3" />
          <p>
            You enclose the commons, you put up the fence. <br />
            To survive- have to use it, gotta pay rent
            <br />
            But you mix no labor, you don&apos;t occupy,
            <br />
            If I wanna live, gotta sell my time
            <br />
          </p>
          <p>
            Absentee ownership, what a fucking farce
            <br />
            Just making life artificially scarce
            <br />
            Burn the leasing office, tear it apart
            <br />
            No more landlords, that&apos;d be a start
            <br />
          </p>
          <p></p>
          <p>
            Rent is just theft <br />
            Rent is just theft <br />
            Rent is just theft <br />
            C&apos;mon just sell your life
          </p>
          <p>
            Rent is just theft <br />
            Rent is just theft <br />
            Rent is just theft <br />
            Pay up or die!
          </p>
          <p></p>
          <p>
            It&apos;s the sickest goddamn joke I&apos;ve ever fucking known,
            <br />
            A magic deed and title that says you own,
            <br />
            Basically feudalism, has a nasty ring
            <br />
            Long live the levelers and death to the king!
            <br />
          </p>
          <p>
            Rent is just theft <br />
            Rent is just theft <br />
            Rent is just theft <br />
            C&apos;mon just sell your life
          </p>
          <p>
            Rent is just theft <br />
            Rent is just theft <br />
            Rent is just theft <br />
            Pay up or die!
          </p>
        </Accordion>

        <Accordion title="Not A Collapse">
          <div id="tpYtContainer">
            <iframe
              width="540"
              height="920"
              src="https://www.youtube.com/embed/txSrsqBqU3Y"
              frameBorder="0"
            ></iframe>
          </div>
          <p>
            I&apos;s not a collapse says the six o&apos;clock news <br />
            But look at my savings man they&apos;re fucking through <br />
            So you go to the next town because you they have the jobs <br />
            But its still a corporate desert, a searing heat
            <br />
          </p>
          <p>
            And you&apos;re still on the streets
            <br />
            you&apos;re still on the streets
            <br />
            you&apos;re still on the streets
            <br />
          </p>
          <p>
            So you make your post and you grab your signs
            <br />
            What else came you do, In these exploitive times?
            <br />
            Now your time is up, Your Bills are due
            <br />
            they get the bailouts, but what about you
            <br />
            Nothing for you <br />
            Nothing for you
            <br />
            Nothing for you
            <br />
          </p>
          <p>
            Well the resistance is here and the resistance is queer <br />
            Fuck it man, we&apos;ve always been here. <br />
            Used to being bashed by the fucking fash <br />
            And though they risen up from ashes of the past
            <br />
            And we&apos;ll burn it down
            <br />
            We&apos;ll burn it down
            <br />
            We&apos;ll burn it down
            <br />
            Bring justice to your town
            <br />
          </p>
        </Accordion>

        <Accordion title="Commie Gun">
          <VideoPlayer id="ZHgfPKJgsLc" />
          <p style={{ marginBottom: "2rem" }}></p>
          <p>
            Commie gun! <br />
            Bought you before the Obama import ban <br />
            Commie gun! <br />
            No one makes an AK like Izhmash can <br />
            Commie gun! <br />
            I used to romanticize insurrection <br />
            Commie gun! <br />
            now I find myself in a different situation
          </p>
          <p>
            Commie gun!
            <br />
            I wish you could understand what I saw
            <br />
            Commie gun!
            <br />
            From that time I was on run from the law
            <br />
            Commie gun!
            <br />
            I used to romanticize insurrection <br />
            Commie gun!
            <br />
            now I find myself in a different situation <br />
          </p>

          <p>
            In that courtroom, my early 20s <br />
            Second bust endangerment with my drunk driving <br />
            I was white, I had a lawyer <br />
            Two days jail and a PBJ <br />
            It went away! <br />
            In that courtroom, a young black man <br />
            Second bust selling coke and you'll take note <br />
            Just never made any claim of pain <br />
            But three years must be served and now a family is torn apart
            <br />
            Makes me wanna reach for my
          </p>
          <p>
            Commie gun!
            <br />
            I used to wish I was as tough as you
            <br />
            Commie gun
            <br />
            From my struggles, I found out it&apos;s true <br />
            Commie gun!
            <br />
            I used to romanticize insurrection <br />
            Commie gun!
            <br />
            now I find myself in a different situation
          </p>
          <p>
            Found my tribe and found my start
            <br />
            Found a community I&apos;m a part <br />
            Found my scene in the dark <br />
            Found my family, found my heart
          </p>
          <p>
            Buried in the woods is what I say
            <br />
            Hopefully there will never come the day
            <br />
            But if I ever have to dig it up
            <br />
            That&apos;ll be the day this athiest prays
          </p>
        </Accordion>
      </Section>
    </>
  );
};

export default Music;
