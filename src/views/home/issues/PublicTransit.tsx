import Accordion from "@/components/Accordion";
import React from "react";

const PublicTransit = () => {
  return (
    <Accordion title="Fixing Public Transit" icon="bus">
      <p>
        LexTran needs to be fast, reliable, and cheap. Currently, it&apos;s
        slow, inconsistent, and expensive. We need to increase bus frequency,
        add routes, and invest wisely to ensure that LexTran gets everyone where
        they need to go at a reasonable pace. Doing so will not only increase
        access to transportation, it will reduce traffic and make our roads
        safer.
      </p>
    </Accordion>
  );
};

export default PublicTransit;
