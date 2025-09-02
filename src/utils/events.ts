import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IEvent } from "@/components/Event";

const eventsDirectory = path.join(process.cwd(), "content/events");

export function getAllEvents(): IEvent[] {
  // Get file names under /content/events
  const fileNames = fs.readdirSync(eventsDirectory);
  const allEventsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(eventsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Convert the data to the correct format
      const eventData = matterResult.data as any;

      // Keep the original date for sorting and comparison
      const eventDate = new Date(eventData.date);

      // Combine the data with the id
      return {
        id,
        title: eventData.title,
        image: eventData.image,
        date: eventData.date, // Keep original ISO date string
        time: eventData.time,
        description: eventData.description,
        venueUrl: eventData.venueUrl,
        ticketUrl: eventData.ticketUrl,
        otherBands: eventData.otherBands || [],
      } as IEvent;
    });

  // Sort events by date
  return allEventsData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA < dateB) {
      return -1;
    } else {
      return 1;
    }
  });
}
