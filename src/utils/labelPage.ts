import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ILabelPage {
  title: string;
  description: string;
}

const labelPageDirectory = path.join(process.cwd(), "content/label-page");

export function getLabelPageContent(): ILabelPage {
  // Read the index.md file from label-page directory
  const fullPath = path.join(labelPageDirectory, "index.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Convert the data to the correct format
  const labelPageData = matterResult.data as any;

  return {
    title: labelPageData.title,
    description: labelPageData.description,
  } as ILabelPage;
}
