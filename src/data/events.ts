import { IEvent } from "@/components/Event";
import club27 from "../../public/uploads/images/events/27club.jpg";
import gbPride from "../../public/uploads/images/events/gbpride.jpg";
import prfm from "../../public/uploads/images/events/prfm.jpeg";
import karens from "../../public/uploads/images/events/karens.jpeg";

export const events: IEvent[] = [
  {
    title: "Punk Rock Flea Market 2025",
    image: prfm,
    date: "July 24, 2025",
    // ticketUrl: "fake link",
    venueUrl: "https://www.theeaglesdare.com/",
    description: "Jul 26 at 7:00PM - 11:00PM",
    // otherBands: [{ name: "BOOF", url: "https://booftheworld.bandcamp.com/" }],
  },
  {
    title: "LTC at 27 Club",
    image: club27,
    date: "Aug 24, 2025",
    // ticketUrl: "fake link",
    venueUrl: "https://www.facebook.com/27clubavl/",
    description: "Opening for BOOF",
    otherBands: [{ name: "BOOF", url: "https://booftheworld.bandcamp.com/" }],
  },
  {
    title: "LTC opens for The Karens",
    image: karens,
    date: "Oct 11, 2025",
    // ticketUrl: "fake link",
    venueUrl: "https://www.instagram.com/thekarens.band/",
    description: "Opening for Karens. Charlotte. Venue details coming soon.",
    otherBands: [
      { name: "Karens", url: "https://www.instagram.com/thekarens.band/" },
    ],
  },
];
