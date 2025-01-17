import React from "react";
import PageBanner from "@/components/PageBanner";
import Accordion from "@/components/Accordion";
import Section from "@/components/Section";
import AudioPlayer from "@/components/AudioPlayer";
import Disclaimer from "@/components/Disclaimer";
import { Metadata } from "next";
import Socials, { ISocial } from "@/components/Socials";

export const metadata: Metadata = {
  title: "Louder Transition Collective Discography",
  description:
    "A hardcore anarcho-punk band from Charlotte, NC currently looking for like minded punks to join",
  authors: {
    name: "Alex Miller",
    url: "www.alexmillerwebdev.com",
  },
  creator: "Rebel Rabbit Alex",
  publisher: "Rebel Rabbit Alex",

  keywords: [
    "Louder Transition Collective Discography",
    "Louder Transition Collective music",
  ],
  themeColor: "#0F8185",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://wwww.loudertransition.com",
    title: "Louder Transition Collective",
    description:
      "A hardcore anarcho-punk band from Charlotte, NC currently looking for like minded punks to join",
    siteName: "Louder Transition Collective",
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
      <PageBanner title={" Transition Collective Music (and Lyrics)"} />
      <Section>
        <Disclaimer />
      </Section>
      <Section>
        <hr />
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
        <Accordion title="Untitled - NoZen Contrafactum">
          <AudioPlayer file="NoZen-song.mp3" />
          <p>
            <b>Guitar and Drums originally from NoZen</b>
            <br />
            NoZen is a newly forming hardcore punk band. They recently released
            this track without lyrics or vocals. As an experiment, I wrote and
            recorded my own vocals for their original song. I have their
            permission to post my version. You should absolutely check them out!
          </p>
          <Socials label={"NoZen Socials"} socials={nozenSocials} />
          <hr style={{ marginBottom: "2rem" }} />
          <p>
            I don&apos;t know the solution, all the answers, if they do, they
            are lying, when they say
            <br />
            How it&apos;ll go days ahead, getting darker, progress stalling,
            ever falling despair sets in
            <br />
            But I know can&apos;t rely, thoughts and prayers, dreams and hopes,
            without action it&apos;s useless you
            <br />
            Gotta show (up) not alone, never were, a facade, just the fucking
            system trying to
          </p>

          <p>
            Bring us down
            <br />
            Bring us down
            <br />
            Bring us down
            <br />
            I didn&apos;t come this far in my struggles just to be turned around
            <br />
            Turned around
            <br />
            Turned around
          </p>
          <p>
            Here we go they will tremble, see our numbers, disaffection, mass
            movement, we will
            <br />
            Overthrow done before, done again, show these bastards who we are
            and then we&apos;ll scream
            <br />
            Never again, Again, Again, AGAIN
          </p>
          <p>
            Overthrow done before, done again, show these bastards who we are
            and then we&apos;ll scream
            <br />
            Never again, Again, Again, AGAIN
          </p>
        </Accordion>
        <Accordion title="Not A Collapse">
          <AudioPlayer file="Not-a-collapse.mp3" />
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
            Used to being bashed by the fucking fash <br />
            And though they risenfrom ashes of the past
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
        </Accordion>
        <Accordion title="Was Never For Us">
          <AudioPlayer file="It-was-never-for-us.mp3" />
          <p>
            They steal the land <br />
            They call it progress <br />
            But it&apos;s clear it was never fucking for us
            <br />
            They say they serve
            <br />
            And they protect <br />
            Yea the master race, they&apos;re the architects
            <br />
            Say it&apos;s a contract <br />
            They call it wages
            <br />
            Exploitation as old as the ages
            <br />
          </p>
          <p>
            It was never for us <br />
            It was never for us <br />
            It was never for us <br />
          </p>
          <p>
            They call it rent <br />
            Say you can live here <br />
            Predicated on a condition of fear <br />
            Absolution <br />
            They say they offer <br />
            Obedience is all they ask or suffer <br />
            Revolution <br />
            Or evolution <br />
            There&apos;s room for both and we need a solution
          </p>
          <p>
            It was never for us <br />
            It was never for us <br />
            It was never for us <br />
          </p>
          <p>
            I got your back
            <br />
            If you got mine
            <br />
            Solidarity until the end of time
            <br />
            I got your back
            <br />
            If you got mine
            <br />
            Solidarity until the end of time
            <br />
            I got your back
            <br />
            If you got mine
            <br />
            Solidarity until the end of time
            <br />
          </p>
          <p>
            It was never for us <br />
            It was never for us <br />
            It was never for us <br />
          </p>
        </Accordion>
        <Accordion title="Commie Gun">
          <AudioPlayer file="Commie-Gun.mp3" />
          <p></p>
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
            Found my tribe and found my start
            <br />
            Found a community I&apos;m a part <br />
            Found my scene in the dark <br />
            Found my family, found my heart
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
            Found my tribe and found my start
            <br />
            Found a community I&apos;m a part <br />
            Found my scene in the dark <br />
            Found my family, found my heart
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
        <Accordion title="Never Homeless Again">
          {/* <AudioPlayer file="Never-Homeless-Again.mp3" /> */}
          <h4>Track coming soon!</h4>
          <p>
            None of my friends will ever be homeless <br />
            Not while I can still fucking breathe <br />
            We&apos;ll build each other up, we&apos;ll survive and thrive <br />
            Together, a family, we&apos;ll fight this fight
          </p>
          <p>
            It must be hard living in a world <br />
            Where you have such little control over it all <br />
            I&apos;m here to tell you something I think is true <br />
            Together we can build, build something new
          </p>
          <p>
            They say we&apos;re ungrateful, they say we&apos;re a waste <br />
            But they don&apos;t know the struggle, they don&apos;t know the
            taste <br />
            Of living on the edge with nowhere to go <br />
            But we&apos;ll write our own story, we&apos;ll take control
          </p>
          <p>
            It must be hard living in a world <br />
            Where you have such little control over it all <br />
            I&apos;m here to tell you something I think is true <br />
            Together we can build, build something new
          </p>
          <p>
            You&apos;re not just a statistic, You&apos;re a person I adore
            <br />I won&apos;t let you fall through cracks in society&apos;s
            floor <br />
            They try to tear us down, make us feel small <br />
            But when I&apos;m here with youk, I feel so fucking tall
          </p>
          <p>
            It must be hard living in a world <br />
            Where you have such little control over it all <br />
            I&apos;m here to tell you something I think is true <br />
            Together we can build, build something new
          </p>
          <p>
            None of my friends will ever be homeless <br />
            Not while I can live, not while I can give!
          </p>
        </Accordion>
      </Section>
    </>
  );
};

export default Music;
