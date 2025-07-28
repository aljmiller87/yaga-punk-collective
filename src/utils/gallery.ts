import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface IGalleryItem {
  id: string;
  title: string;
  description?: string;
  category: string;
  image: string;
  date: string;
  originalDate: Date; // For sorting purposes
  location?: string;
  photographer?: string;
  altText: string;
  featured: boolean;
}

const galleryDirectory = path.join(process.cwd(), "content/gallery");

export function getAllGalleryItems(): IGalleryItem[] {
  // Get file names under /content/gallery
  const fileNames = fs.readdirSync(galleryDirectory);
  const allGalleryData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(galleryDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Convert the data to the correct format
      const galleryData = matterResult.data as any;

      // Parse the date for sorting and formatting
      const itemDate = new Date(galleryData.date);
      const formattedDate = `${
        itemDate.getMonth() + 1
      }/${itemDate.getDate()}/${itemDate.getFullYear()}`;

      // Combine the data with the id
      return {
        id,
        title: galleryData.title,
        description: galleryData.description,
        category: galleryData.category,
        image: galleryData.image,
        date: formattedDate,
        originalDate: itemDate, // Store original date for sorting
        location: galleryData.location,
        photographer: galleryData.photographer,
        altText: galleryData.altText,
        featured: galleryData.featured || false,
      } as IGalleryItem;
    });

  // Sort gallery items by date (newest first)
  return allGalleryData.sort((a, b) => {
    if (a.originalDate > b.originalDate) {
      return -1;
    } else {
      return 1;
    }
  });
}

export function getGalleryItemsByCategory(category: string): IGalleryItem[] {
  return getAllGalleryItems().filter((item) => item.category === category);
}

export function getFeaturedGalleryItems(): IGalleryItem[] {
  return getAllGalleryItems().filter((item) => item.featured);
}
