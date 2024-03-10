import React from "react";
import CopyAndImage from "@/components/CopyAndImage";
import PageBanner from "@/components/PageBanner";
import Section from "@/components/Section";
import VolunteerForm from "@/components/VolunteerForm";

const Volunteer = () => {
  return (
    <div>
      <PageBanner title="Join Us" imgPosition="50% 35%" />
      <Section>
        <h2>Here&apos;s How You Can Help Emma Win!</h2>
        <h3>Make a Plan to Vote</h3>
        <p>
          The most important thing you can do to help Emma win is to{" "}
          <b>vote for her on or before Tuesday, May 21st</b>.
        </p>
        <p>
          You can register to vote, make sure your voter registration is up to
          date, view your sample ballot, and find your polling location{" "}
          <a
            href="https://vrsws.sos.ky.gov/ovrweb/govoteky"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>
          <b>The deadline to register to vote is Monday, April 22nd at 4pm.</b>
        </p>
        <p>
          Council races are non-partisan, so you can vote for Emma no matter
          which party you&apos;re registered with.
        </p>
        <p></p>
        <h3>Volunteer</h3>
        <p>
          This campaign is about building community and bringing people
          together.
        </p>
        <p>
          Whether you&apos;re a veteran campaign volunteer or taking your first
          steps into local politics,{" "}
          <b>there is a place for you on this campaign!</b>
        </p>
        <p>
          You can sign up to help us knock doors, make phone calls, write
          postcards, host an event, or help in whatever way you&apos;re able to{" "}
          <a
            href="https://forms.gle/3RwUsGhbmbEXSwC3A"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p></p>
        <h3>Donate</h3>
        <p>
          Emma is running a grassroots, people-focused, people-funded campaign.{" "}
        </p>
        <p>
          <b>In a race like this, every dollar counts.</b>
        </p>
        <p>
          Unlike the other candidates running in this race, Emma is a
          working-class person who doesn&apo;t have an out-of-state donor base
          or enough wealth to self-finance her own campaign. You can make sure
          that we&apo;re able to reach as many voters as possible by making a
          donation{" "}
          <a
            href="https://secure.actblue.com/donate/emmacurtislex"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>
          Any amount you&apos;re able to give is greatly appreciated and brings
          us one step closer to building a brighter future for <b>ALL</b>
          Lexingtonians. Individuals can donate up to $2,100 in the primary, but
          there is no minimum.{" "}
        </p>
        <p></p>
        <h3>Show Your Support</h3>
        <p>
          Let people know you&apos;re supporting Emma and her plan to move
          Lexington forward together with this season&apos;s most fashionable
          item—an Emma for Council shirt!
        </p>
        <p>
          You can purchase shirts and other merchandise{" "}
          <a
            href="https://www.bonfire.com/store/emmaforlex/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          . <b>Proceeds go towards supporting Emma&apos;s campaign!</b>
        </p>
        <p>
          We&apos;d love for you to show your support with a <b>free</b> yard
          sign and/or bumper sticker. You can sign up to request them{" "}
          <a
            href="https://forms.gle/suukLVa9ZrQLqWpi7"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p></p>
        <h3>Spread The Word</h3>
        <p>
          Even though local elections often impact our day-to-day lives more
          than state or federal elections, they don&apos;t tend to get as much
          attention.
        </p>
        <p>
          <b>
            We need your help to make sure Emma&apos;s message reaches as many
            voters as possible.
          </b>
        </p>
        <p>
          Please share{" "}
          <a
            href="https://emmaforlex.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            this website
          </a>{" "}
          with your friends and follow us on{" "}
          <a
            href="https://www.facebook.com/EmmaForLexingtonCouncil"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          ,{" "}
          <a
            href="https://www.instagram.com/emmacurtislex/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          ,{" "}
          <a
            href="https://twitter.com/emmacurtislex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          , and{" "}
          <a
            href="https://www.tiktok.com/@emmacurtislex"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>{" "}
          to spread the word!
        </p>
      </Section>
      {/* <VolunteerForm /> */}
    </div>
  );
};

export default Volunteer;
