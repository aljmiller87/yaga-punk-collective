"use client";

import React, { useState, useMemo } from "react";
import Section from "@/components/Section";
import Event from "@/components/Event";
import { IEvent } from "@/components/Event";
import Toggle from "@/components/Toggle";

interface EventsClientProps {
  allEvents: IEvent[];
}

const EventsClient: React.FC<EventsClientProps> = ({ allEvents }) => {
  const [activeView, setActiveView] = useState("upcoming");

  const { upcomingEvents, pastEvents } = useMemo(() => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Reset time to start of day for accurate comparison

    const upcoming: typeof allEvents = [];
    const past: typeof allEvents = [];

    allEvents.forEach((event) => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);

      if (eventDate >= currentDate) {
        upcoming.push(event);
      } else {
        past.push(event);
      }
    });

    return { upcomingEvents: upcoming, pastEvents: past };
  }, [allEvents]);

  const displayedEvents = activeView === "past" ? pastEvents : upcomingEvents;
  const sectionTitle =
    activeView === "past" ? "Past Events" : "Upcoming Events";

  const toggleOptions = [
    { label: "Upcoming Events", value: "upcoming" },
    { label: "Past Events", value: "past" },
  ];

  return (
    <Section>
      <h2>{sectionTitle}</h2>
      <Toggle
        options={toggleOptions}
        value={activeView}
        onChange={setActiveView}
      />
      {displayedEvents.length > 0 ? (
        displayedEvents.map((event, ind) => <Event key={ind} {...event} />)
      ) : (
        <p
          style={{
            textAlign: "center",
            fontStyle: "italic",
            color: "var(--surface)",
          }}
        >
          {activeView === "past"
            ? "No past events found."
            : "No upcoming events found."}
        </p>
      )}
    </Section>
  );
};

export default EventsClient;
