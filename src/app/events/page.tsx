import PageBanner from "@/components/PageBanner";
import React from "react";
import Section from "@/components/Section";
import Event from "@/components/Event";
import { events } from "@/data/events";
import FullWidthImageContent from "@/components/FullWidthImageContent";
const Events = async () => {
  return (
    <div>
      <PageBanner title={"Louder Transition Events"} />
      <Section>
        <h2>Upcoming Events</h2>
        {events.map((event, ind) => (
          <Event key={ind} {...event} />
        ))}
      </Section>
      <FullWidthImageContent />
    </div>
  );
};

export default Events;
