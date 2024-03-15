import React from "react";
import styles from "./styles.module.scss";
import Card from "@/components/Card";
import Section from "@/components/Section";
const NewsList = () => {
  return (
    <Section>
      <div className={styles.Cards}>
        <Card
          title={`"Love Transcends"`}
          url="https://kykernel.com/100355/news/love-transcends-outlaw-hosts-second-annual-banquet/"
          day={27}
          month={"Feb"}
          img={"ky-kernal.jpg"}
          subheading={"Kentucky Kernel"}
          teaser="OUTLaw hosts second annual banquet with keynote speakers Suzanne Goldberg and Emma Curtis"
        />
        <Card
          title="Emma Curtis speaks at 2024 Fairness Rally"
          url="https://twitter.com/emmacurtislex/status/1761150558637842455"
          day={24}
          month={"Feb"}
          img={"2024-fairness-speaking1.jpg"}
          subheading={"Kentucky State Capitol Rotunda"}
          teaser={`“This place is our home and it is worth fighting for. You are worth fighting for.”`}
        />
        <Card
          title="Emma Curtis officially launches Lexington Council campaign"
          url="https://twitter.com/emmacurtislex/status/1759376116651855898?s=46"
          day={18}
          month={"Feb"}
          img={"launch-event.jpg"}
          subheading={"Cumberland Hill Clubhouse"}
          teaser={`“We are ready to hit the ground running to win in the primary election on May 21st and in the general election on November 5th!”`}
        />
        <Card
          title="Emma Curtis at CivicLex Community Breakfast"
          url="https://kykernel.com/99384/news/civiclex-pancake-breakfast-engages-community-in-local-government/"
          day={29}
          month={"Jan"}
          img={"CivicLexPancakeBfast.jpg"}
          subheading={"Kentucky Kernel"}
          teaser={`“I am so glad that we have an organization like CivicLex that is focused on the civic health of our city.”`}
        />
        <Card
          title="Emma Curtis testifies on Source-of-Income Discrimination"
          url="https://twitter.com/emmacurtislex/status/1748777015950328166"
          day={20}
          month={"Jan"}
          img={"testifying.jpg"}
          subheading={"KET & LexTV"}
          teaser={`“Our state and local governments need to collaborate, not antagonize.”`}
        />
        <Card
          title="Emma Curtis at Lexington’s MLK Freedom March"
          url="https://kykernel.com/98993/news/lexington-citizens-gather-for-martin-luther-king-jr-freedom-march/"
          day={15}
          month={"Jan"}
          img={"mlk-march.jpeg"}
          subheading={"Kentucky Kernel"}
          teaser={`“I think it’s really important that we acknowledge publicly and vocally that Dr. King’s work is not finished.”`}
        />
        <Card
          title="Community advocate Emma Curtis files to run for Lexington Council"
          url="https://www.lex18.com/news/community-advocate-emma-curtis-files-to-run-for-lexington-council"
          day={4}
          month={"Jan"}
          img={"files_to_run.jpg"}
          subheading={"LEX18 News"}
          teaser={`“I wanna bring something back to this seat which is servant leadership.”`}
        />
        <Card
          title="My Old Kentucky Podcast 2023 Superlatives"
          url="https://twitter.com/MyOldKYPod/status/1741521101354635534"
          day={31}
          month={"Dec"}
          img={"MOKP.jpg"}
          subheading={"My Old Kentucky Podcast"}
          teaser="Emma Curtis and Sen. Cassie Chambers-Armstrong named 2023 Rising Stars"
        />
        <Card
          title={`Emma Curtis on Daniel Cameron’s election loss`}
          url="https://www.kentucky.com/news/politics-government/article281609593.html"
          day={9}
          month={"Nov"}
          img={"daniel.jpeg"}
          subheading={"Lexington Herald-Leader"}
          teaser={`“Nobody likes a bully.”`}
        />
        <Card
          title={`Emma Curtis on Gov. Beshear’s re-election victory`}
          url="https://www.nytimes.com/2023/11/08/us/kentucky-democrat-andy-beshear.html#:~:text=But%20with%20his%20re%2Delection,than%20his%20win%20in%202019"
          day={8}
          month={"Nov"}
          img={"nyt-andy-victory.jpg"}
          subheading={"The New York Times"}
          teaser={`“It shows that running campaigns based on hatred and identity politics isn’t an effective strategy.”`}
        />
        <Card
          title={`Emma Curtis reflects on how Gen Z, LGBTQ+ people approach political organizing`}
          url="https://www.lpm.org/news/2023-08-19/emma-curtis-reflects-on-how-gen-z-lgbtq-people-approach-political-organizing"
          day={19}
          month={"Aug"}
          img={"emma-2023.jpg"}
          subheading={"WFPL News"}
          teaser={`“Our futures are being decided by people who will not likely live to see the consequences of their actions.”`}
        />
      </div>
    </Section>
  );
};

export default NewsList;
