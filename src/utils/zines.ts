import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface IZineRelease {
  id: string;
  title: string;
  issue?: string;
  coverImage: string;
  coverImage2?: string;
  releaseDate: string;
  originalDate: Date;
  description?: string;
  zineTheme: Array<{
    theme: string;
  }>;
  featuredBands?: Array<{
    name: string;
    url?: string;
  }>;
  purchaseUrl?: string;
  downloadUrl?: string;
  isDigital?: boolean;
}

const zinesDirectory = path.join(process.cwd(), "content/zines");

export function getAllZineReleases(): IZineRelease[] {
  // Get file names under /content/zines
  const fileNames = fs.readdirSync(zinesDirectory);
  const allZineData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(zinesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Convert the data to the correct format
      const zineData = matterResult.data as any;

      // Parse the date for sorting and formatting
      const releaseDate = new Date(zineData.releaseDate);
      const formattedDate = `${
        releaseDate.getMonth() + 1
      }/${releaseDate.getDate()}/${releaseDate.getFullYear()}`;

      // Combine the data with the id
      return {
        id,
        title: zineData.title,
        issue: zineData.issue,
        coverImage: zineData.coverImage,
        coverImage2: zineData.coverImage2,
        releaseDate: formattedDate,
        originalDate: releaseDate, // Store original date for sorting
        description: zineData.description,
        zineTheme: zineData.zineTheme || [],
        featuredBands: zineData.featuredBands || [],
        purchaseUrl: zineData.purchaseUrl,
        downloadUrl: zineData.downloadUrl,
        isDigital: zineData.isDigital,
      } as IZineRelease;
    });

  // Sort zine releases by date (newest first)
  return allZineData.sort((a, b) => {
    if (a.originalDate > b.originalDate) {
      return -1;
    } else {
      return 1;
    }
  });
}

export function getZineReleaseById(id: string): IZineRelease | undefined {
  return getAllZineReleases().find((zine) => zine.id === id);
}
