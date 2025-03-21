import { IEvent } from "@/components/Event";
import club27 from "../../public/uploads/images/events/27club.jpg";

export const events: IEvent[] = [
  {
    title: "LTC at 27 Club",
    image: club27,
    date: "Aug 24, 2025",
    // ticketUrl: "fake link",
    venueUrl: "https://www.facebook.com/27clubavl/",
    description: "Opening for BOOF",
    otherBands: [{ name: "BOOF", url: "https://booftheworld.bandcamp.com/" }],
  },
];
