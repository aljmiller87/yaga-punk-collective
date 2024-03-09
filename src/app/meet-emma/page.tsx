import React from "react";
import PageBanner from "@/components/PageBanner";
import Section from "@/components/Section";
import BannerImg from "../../../public/assets/images/speaking-to-person1.jpg";
import CopyAndImage from "@/components/CopyAndImage";
import EmmaAndMom from "../../../public/assets/images/meet-emma/Emma with her mom.jpg";
import RegVote from "../../../public/assets/images/meet-emma/Emma holding register to vote sign.jpg";
import EmmaAndGeorge from "../../../public/assets/images/meet-emma/Emma with George Szekely.jpg";
import ComMeeting from "../../../public/assets/images/meet-emma/Emma leads community meeting.jpg";
import EmmaAndBenny from "../../../public/assets/images/meet-emma/Emma with Benny.jpg";
import KFTC from "../../../public/assets/images/meet-emma/Emma with KFTC.jpg";
import EmmaAndGov from "../../../public/assets/images/Emma-with-andy-jacq.jpg";

const MeetEmma = () => {
  return (
    <div>
      <PageBanner title="Meet Emma" img={BannerImg} imgPosition="50% 25%" />
      <CopyAndImage img={EmmaAndMom}>
        <p>
          <b>Emma Curtis was born here in Lexington in 1996.</b>
        </p>
        <p>
          Growing up on her family&apos;s farm, she learned quickly how to work
          hard and get the job done. She&apos;s carried that work ethic with her
          ever since.
        </p>
        <p>
          From an early age, her family instilled in her an understanding of the
          importance of civic engagement and public service.
        </p>
        <p>
          Her mother worked for former Governor Wallace Wilkinson. Her uncle
          worked for everybody from the Legislative Research Commission to
          former Governor Steve Beshear. This gave Emma a front row seat to the
          day-to-day work that goes into making effective public policy.
        </p>
      </CopyAndImage>
      <div style={{ margin: "-2rem 0" }}>
        <Section>
          <blockquote>
            Emma became politically active during the 2016 presidential
            election, working to push back against the cruelty and
            mean-spiritedness she saw brewing in her community.
          </blockquote>
        </Section>
      </div>
      <CopyAndImage img={RegVote} reverse imgPosition="50% 5%">
        <p>
          As a student at Centre College, she helped organize and participated
          in several campaigns and events aimed at increasing administrative
          transparency, reducing sexual assault and harassment on campus, and
          promoting inclusion and equality for students of color and LGBTQ+
          students.
        </p>
        <p>
          She also began knocking doors and phone-banking for the political
          campaigns of candidates she believed in, as well as attending rallies
          and community organizing meetings to support the causes that impacted
          her community.
        </p>
      </CopyAndImage>
      <CopyAndImage img={EmmaAndGeorge} imgPosition="50% 25%">
        <p>
          <b>
            After graduating from Centre in 2018, Emma has spent her entire
            adult life working and living in Lexington.
          </b>
        </p>
        <p>
          Currently, she works as an independent filmmaker telling the stories
          of the remarkable people that make Lexington so special. Her most
          recent film, <i>There Is No Answer: A Film About George Szekely</i>,
          will be airing on KET this year.
        </p>
      </CopyAndImage>
      <CopyAndImage img={KFTC} reverse>
        <p>
          She also works as a community organizer and issue-based advocate.
          Whether registering Lexingtonians to vote through her work as a voter
          engagement organizer at Kentuckians for the Commonwealth or
          volunteering with organizations like the ACLU of Kentucky and the
          Fairness Campaign, Emma has demonstrated a relentless commitment to
          building a better future for her community and her commonwealth.
        </p>
      </CopyAndImage>
      <CopyAndImage img={EmmaAndBenny} imgPosition="50% 35%">
        <p>
          She is a member of several community-focused organizations, from
          CivicLex to the Lexington Forum, which are focused on bringing people
          together, having good-faith conversations, and improving
          Lexington&apos;s civic health.
        </p>
        <p>
          When she&apos;s not working, Emma enjoys spending quality time with
          her partner and family, going to see classic movies at The Kentucky
          Theatre, playing music with her friends, and taking her dog Benny for
          long walks at Veterans Park.
        </p>
      </CopyAndImage>
      <CopyAndImage img={ComMeeting} reverse>
        <p>
          <b>
            Emma is running for Council because she loves her neighbors and
            community in South Lexington.
          </b>
        </p>
        <p>
          She knows that running for office is serious business. It&apos;s not
          something to do because you want a job that you can keep regardless of
          how often you miss work. It&apos;s not something to do because
          you&apos;re retired, wealthy, and want to put another feather in your
          cap.
        </p>
      </CopyAndImage>

      <CopyAndImage img={EmmaAndGov}>
        <p>
          It&apos;s something to do because you care deeply about the people and
          communities you wish to serve.
        </p>
        <p>
          A Councilmember&apos;s job is to advocate for the people who live in
          their district and address the issues that matter to{" "}
          <b>them—and that&apos;s exactly what Emma will do</b>.
        </p>
        <p>
          <b>
            With your support, Emma Curtis will continue her record of choosing
            people over politics, community over division, and tangible good
            over empty gestures as the next Councilmember for District 4.
          </b>
        </p>
      </CopyAndImage>
    </div>
  );
};

export default MeetEmma;
