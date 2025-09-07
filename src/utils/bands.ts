import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface IBand {
  id: string;
  title: string;
  picture: string;
  description: string;
  link?: string;
}

const bandsDirectory = path.join(process.cwd(), "content/bands");

export function getAllBands(): IBand[] {
  // Get file names under /content/bands
  const fileNames = fs.readdirSync(bandsDirectory);
  const allBandData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(bandsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Convert the data to the correct format
      const bandData = matterResult.data as any;

      // Combine the data with the id
      return {
        id,
        title: bandData.title,
        picture: bandData.picture,
        description: bandData.description,
        link: bandData.link,
      } as IBand;
    });

  return allBandData;
}

export function getBandById(id: string): IBand | undefined {
  return getAllBands().find((band) => band.id === id);
}
