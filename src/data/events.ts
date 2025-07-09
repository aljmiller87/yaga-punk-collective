import { IEvent } from "@/components/Event";
import club27 from "../../public/uploads/images/events/27club.jpg";
import gbPride from "../../public/uploads/images/events/gbpride.jpg";
import prfm from "../../public/uploads/images/events/prfm2.png";
import karens from "../../public/uploads/images/events/karens.jpeg";
import pantherLake from "../../public/uploads/images/events/panther-lake.jpeg";

export const events: IEvent[] = [
  {
    title: "Punk Rock Flea Market 2025",
    image: prfm,
    date: "July 24, 2025",
    time: "7:00PM - 11:00PM",
    // ticketUrl: "fake link",
    venueUrl: "https://www.theeaglesdare.com/",
    description: "Jul 26",
    // otherBands: [{ name: "BOOF", url: "https://booftheworld.bandcamp.com/" }],
  },
  {
    title: "LTC at Panther Lake",
    image: pantherLake,
    date: "Aug 9, 2025",
    // ticketUrl: "fake link",
    venueUrl: "https://www.bandsintown.com/v/10177481-panther-lake",
    description: "Aug 9",
    time: "5:00PM",
    otherBands: [
      { name: "Machine Gun Earl", url: "https://machinegunearl.bandcamp.com/" },
      {
        name: "Stoker",
        url: "https://thetruthaboutstoker.bandcamp.com/album/stoker-2",
      },
      { name: "Sea Hagg", url: "https://www.instagram.com/seahaggnc/" },
    ],
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
