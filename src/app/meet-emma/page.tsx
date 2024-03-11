import React from "react";
import PageBanner from "@/components/PageBanner";
import Section from "@/components/Section";
import BannerImg from "../../../public/assets/images/speaking-to-person1.jpg";
import CopyAndImage from "@/components/CopyAndImage";
import EmmaAndMom from "../../../public/assets/images/meet-emma/Emmawithhermom.jpg";
import RegVote from "../../../public/assets/images/meet-emma/Emmaholdingregistertovotesign.jpg";
import EmmaAndGeorge from "../../../public/assets/images/meet-emma/EmmawithGeorgeSzekely.jpg";
import ComMeeting from "../../../public/assets/images/meet-emma/Emma_community_meeting.jpeg";
import EmmaAndBenny from "../../../public/assets/images/meet-emma/Emma_with_Benny.jpg";
import KFTC from "../../../public/assets/images/meet-emma/EmmawithKFTC.jpg";
import EmmaAndGov from "../../../public/assets/images/Emma-with-andy-jacq.jpg";

const MeetEmma = () => {
  return (
    <div>
      <PageBanner title="Meet Emma" img={BannerImg} imgPosition="50% 25%" />
      <CopyAndImage img={EmmaAndMom}>
        <h2>Emma Curtis was born in Lexington in 1996.</h2>
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
      <CopyAndImage img={RegVote} reverse imgPosition="50% 5%">
        <h2>Emma became politically active in 2016.</h2>
        <p>
          She wanted to push back against the cruelty and mean-spiritedness she
          saw brewing in her community during that year&apos;s presidential
          election.
        </p>
        <p>
          As a student at Centre College, she helped organize and participated
          in several campaigns and events aimed at increasing administrative
          transparency, preventing sexual assault and harassment on campus, and
          promoting inclusion and equality for students of color and LGBTQ+
          students.
        </p>
        <p>
          She also began knocking doors and phone-banking for the political
          campaigns of candidates she believed in, as well as attending rallies,
          marches, and community organizing meetings.
        </p>
      </CopyAndImage>
      <CopyAndImage img={EmmaAndGeorge} imgPosition="50% 25%">
        <h2>
          After graduating from Centre in 2018, Emma has spent her entire adult
          life working and living in Lexington.
        </h2>
        <p>
          Currently, she works as an independent filmmaker telling the stories
          of the remarkable people that make Lexington so special. Her most
          recent film, <i>There Is No Answer: A Film About George Szekely</i>,
          will be airing on KET this year.
        </p>
      </CopyAndImage>
      <CopyAndImage img={KFTC} reverse>
        <h2>She also works as an issue-based organizer and advocate.</h2>
        <p>
          Whether registering Lexingtonians to vote through her work as a voter
          engagement organizer at Kentuckians for the Commonwealth or
          volunteering with organizations like the ACLU of Kentucky and the
          Fairness Campaign, Emma has demonstrated a relentless commitment to
          building a better future for her community and her commonwealth.
        </p>
      </CopyAndImage>
      <CopyAndImage img={EmmaAndBenny} mobileReverse imgPosition="50% 35%">
        <h2>Outside of work, she is extremely active in her community.</h2>
        <p>
          She is a member of several community-focused organizations, including
          CivicLex, the Lexington Branch of the Kentucky Women&apos;s network,
          and the Lexington Forum, which are focused on bringing people
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
      <CopyAndImage img={ComMeeting} mobileReverse reverse>
        <h2>
          Emma is running for Council because she loves her neighbors and
          community in South Lexington.
        </h2>
        <p>
          She knows that running for office is serious business. It&apos;s not
          something to do because you want a job that you can keep regardless of
          how often you miss work. It&apos;s not something to do because
          you&apos;re retired, wealthy, and want to put another feather in your
          cap.
        </p>
        <p>
          It&apos;s something to do because you care deeply about the people and
          communities you wish to serve.
        </p>
        <p>
          A Councilmember&apos;s job is to advocate for the people who live in
          their district and address the issues that matter to them—
          <b>and that&apos;s exactly what Emma will do</b>.
        </p>
      </CopyAndImage>

      <CopyAndImage img={EmmaAndGov} mobileReverse>
        <h2
          style={{
            textAlign: "center",
            color: "#129499",
            fontSize: "1.8rem",
            lineHeight: "1.5",
          }}
        >
          <b>
            With your support, Emma Curtis will continue her record of choosing
            people over politics, community over division, and tangible good
            over empty gestures
            <br /> as the next Councilmember for District 4.
          </b>
        </h2>
      </CopyAndImage>
    </div>
  );
};

export default MeetEmma;
