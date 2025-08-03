import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface IBandMember {
  id: string;
  title: string;
  role: string;
  image: string;
  pronouns?: string;
  bio: string;
  socialMediaUrls?: Array<{
    platform: string;
    url: string;
  }>;
  order: number;
}

const bandMembersDirectory = path.join(process.cwd(), "content/bandMembers");

export function getAllBandMembers(): IBandMember[] {
  // Get file names under /content/bandMembers
  const fileNames = fs.readdirSync(bandMembersDirectory);
  const allBandMembersData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(bandMembersDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Convert the data to the correct format
      const memberData = matterResult.data as any;

      // Combine the data with the id
      return {
        id,
        title: memberData.title,
        role: memberData.role,
        image: memberData.image,
        pronouns: memberData.pronouns,
        bio: matterResult.content,
        socialMediaUrls: memberData.socialMediaUrls || [],
        order: memberData.order || 999,
      } as IBandMember;
    });

  // Sort members by order
  return allBandMembersData.sort((a, b) => a.order - b.order);
}

export function getBandMemberById(id: string): IBandMember | null {
  try {
    const fullPath = path.join(bandMembersDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const memberData = matterResult.data as any;

    return {
      id,
      title: memberData.title,
      role: memberData.role,
      image: memberData.image,
      pronouns: memberData.pronouns,
      bio: matterResult.content,
      socialMediaUrls: memberData.socialMediaUrls || [],
      order: memberData.order || 999,
    } as IBandMember;
  } catch (error) {
    return null;
  }
}
