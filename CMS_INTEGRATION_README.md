# CMS Integration for Yaga Punk Collective

## Overview

The homepage has been set up with Tina CMS integration. The Hero component now accepts dynamic props and the homepage is currently using a temporary file-reading solution until the Tina types are regenerated.

## What's Been Implemented

### 1. Tina CMS Schema

- Added `homepage` collection to `tina/config.ts`
- Includes metadata object with all standard SEO fields
- Includes HeroComponent object with image, title, subtitle, ctaUrl, and ctaLabel

### 2. Homepage Content

- Created `content/homepage/index.md` with sample data
- All fields are populated with relevant content

### 3. Component Updates

- Hero component now accepts props: `image`, `title`, `subtitle`, `ctaUrl`, `ctaLabel`
- CTA fields are optional as requested
- Button is now a Link component for proper navigation

### 4. Homepage Integration

- **TEMPORARY SOLUTION**: Currently reading markdown file directly using `gray-matter`
- Ready for full CMS integration once Tina types are regenerated

## Current Status

- ✅ CMS schema defined
- ✅ Content file created
- ✅ Components updated to accept props
- ✅ Homepage working with temporary file reading
- ⏳ Waiting for Tina types regeneration
- ⏳ Full CMS integration (blocked by types)

## Next Steps to Complete CMS Integration

### 1. Regenerate Tina Types

After adding the new homepage collection, you need to regenerate the Tina types:

```bash
# If using npm
npm run tina:generate

# If using yarn
yarn tina:generate

# Or manually run the Tina CLI
npx tinacms init
```

### 2. Switch Back to Tina Client

Once types are regenerated, replace the temporary solution in `src/app/page.tsx`:

**Replace this:**

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getHomepageData() {
  try {
    const filePath = path.join(process.cwd(), "content/homepage/index.md");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data;
  } catch (error) {
    console.error("Error reading homepage data:", error);
    return null;
  }
}
```

**With this:**

```typescript
import { client } from "../../tina/__generated__/client";

async function getHomepageData() {
  try {
    const homepageResponse = await client.queries.homepage({
      relativePath: "index.md",
    });
    return homepageResponse.data.homepage;
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return null;
  }
}
```

## Benefits of This Setup

1. **Dynamic Content**: Hero section content can be updated through the CMS
2. **SEO Management**: All metadata fields are manageable through the CMS
3. **Flexible CTA**: Call-to-action button is optional and configurable
4. **Fallback Content**: Static fallbacks ensure the site works even without CMS data
5. **Type Safety**: Once types are regenerated, full TypeScript support will be available
6. **Immediate Functionality**: Site works now with the temporary solution

## Testing

1. Start the development server: `npm run dev`
2. The homepage should display with the current CMS content
3. Edit `content/homepage/index.md` to see changes reflected immediately
4. Once types are regenerated, use Tina's admin interface to edit content

## Troubleshooting

- **"Unable to find record" error**: This means Tina types need to be regenerated
- **File reading errors**: Check that `content/homepage/index.md` exists and has valid frontmatter
- **Build errors**: Ensure all dependencies are installed and Tina is properly configured
