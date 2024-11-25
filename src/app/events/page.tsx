import PageBanner from "@/components/PageBanner";
import React from "react";
import Section from "@/components/Section";
import Event, { IEvent } from "@/components/Event";
// import { getEvents, getPageData } from "../utils";

const Events = async () => {
  // const {
  //   data: {
  //     pages: { bannerImage, title, bodyText },
  //   },
  // } = await getPageData("Upcoming-Events.md");
  // const events: IEvent[] = await getEvents();
  // console.log(`events: ${JSON.stringify(events, null, 2)}`);

  return (
    <div>
      <PageBanner title={"Louder Transition Collective"} />
      <Section>
        <h2>Upcoming Events</h2>
        {/* {events.map((event, ind) => (
          <Event key={ind} {...event} />
        ))} */}
      </Section>
    </div>
  );
};

export default Events;
