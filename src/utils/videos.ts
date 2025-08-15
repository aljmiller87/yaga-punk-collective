import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface IVideoItem {
  youtubeId: string;
  title: string;
  description?: string;
  category: string;
  date: string;
  originalDate: Date; // For sorting purposes
}

const videosDirectory = path.join(process.cwd(), "content/videos");

export function getAllVideos(): IVideoItem[] {
  // Check if the videos directory exists
  if (!fs.existsSync(videosDirectory)) {
    return [];
  }

  // Get file names under /content/videos
  const fileNames = fs.readdirSync(videosDirectory);
  const allVideosData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(videosDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Convert the data to the correct format
      const videoData = matterResult.data as any;

      // Parse the date for sorting and formatting
      const itemDate = new Date(videoData.date);
      const formattedDate = `${
        itemDate.getMonth() + 1
      }/${itemDate.getDate()}/${itemDate.getFullYear()}`;

      // Combine the data with the id
      return {
        youtubeId: videoData.youtubeId,
        title: videoData.title,
        description: videoData.description,
        category: videoData.category,
        date: formattedDate,
        originalDate: itemDate, // Store original date for sorting
      } as IVideoItem;
    });

  // Sort video items by date (newest first)
  return allVideosData.sort((a, b) => {
    if (a.originalDate > b.originalDate) {
      return -1;
    } else {
      return 1;
    }
  });
}

export function getVideosByCategory(category: string): IVideoItem[] {
  return getAllVideos().filter((item) => item.category === category);
}
