"use client";

import React, { useState, useMemo } from "react";
import Section from "@/components/Section";
import Event from "@/components/Event";
import { IEvent } from "@/components/Event";

interface EventsClientProps {
  allEvents: IEvent[];
}

const EventsClient: React.FC<EventsClientProps> = ({ allEvents }) => {
  const [showPastEvents, setShowPastEvents] = useState(false);

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

  const displayedEvents = showPastEvents ? pastEvents : upcomingEvents;
  const sectionTitle = showPastEvents ? "Past Events" : "Upcoming Events";

  return (
    <Section>
      <h2>{sectionTitle}</h2>
      <button
        onClick={() => setShowPastEvents(!showPastEvents)}
        className="Btn-primary"
        style={{ minWidth: "120px", marginBottom: "2rem", maxWidth: "300px" }}
      >
        {showPastEvents ? "Upcoming Events" : "Past Events"}
      </button>
      {displayedEvents.length > 0 ? (
        displayedEvents.map((event, ind) => <Event key={ind} {...event} />)
      ) : (
        <p style={{ textAlign: "center", fontStyle: "italic", color: "#666" }}>
          {showPastEvents
            ? "No past events found."
            : "No upcoming events found."}
        </p>
      )}
    </Section>
  );
};

export default EventsClient;
