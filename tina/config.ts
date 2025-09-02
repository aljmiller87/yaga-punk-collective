import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  process.env.BRANCH ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "zineThemeCategory",
        label: "Zine Theme Categories",
        path: "content/zine-theme-categories",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
        ],
      },
      {
        name: "event",
        label: "Events",
        path: "content/events",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Event Image",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Event Date",
            required: true,
          },
          {
            type: "string",
            name: "time",
            label: "Event Time",
            description: "Optional time information (e.g., 'Doors at 8pm')",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            description: "Optional event description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "ticketUrl",
            label: "Ticket URL",
            description: "URL to purchase tickets",
          },
          {
            type: "string",
            name: "venueUrl",
            label: "Venue URL",
            description: "URL to venue information",
          },
          {
            type: "object",
            name: "otherBands",
            label: "Other Bands",
            description: "List of other bands performing",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Band Name",
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "Band URL",
                description: "Link to band's website or social media",
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => `/events/${document._sys.filename}`,
        },
      },
      {
        name: "zineRelease",
        label: "Zine Releases",
        path: "content/zines",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "issue",
            label: "Issue Number",
            description: "Issue number or identifier",
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
            required: true,
          },
          {
            type: "datetime",
            name: "releaseDate",
            label: "Release Date",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            description: "Brief description of the zine content",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "zineTheme",
            label: "Zine Themes",
            description: "Select one or more theme categories for your zine",
            list: true,
            required: true,
            fields: [
              {
                type: "reference",
                name: "theme",
                label: "Theme",
                description: "Select a theme category",
                collections: ["zineThemeCategory"],
                required: true,
              },
            ],
          },
          {
            type: "string",
            name: "contributors",
            label: "Contributors",
            description: "List of contributors or authors",
          },
          {
            type: "object",
            name: "featuredBands",
            label: "Featured Bands",
            description: "Bands featured or mentioned in this zine",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Band Name",
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "Band URL",
                description:
                  "Link to band's website or social media (optional)",
              },
            ],
          },
          {
            type: "string",
            name: "purchaseUrl",
            label: "Purchase URL",
            description: "URL where people can buy the zine",
          },
          {
            type: "string",
            name: "downloadUrl",
            label: "Download URL",
            description: "URL for digital download if available",
          },
          {
            type: "number",
            name: "pages",
            label: "Number of Pages",
            description: "Total number of pages in the zine",
          },
          {
            type: "boolean",
            name: "isDigital",
            label: "Digital Only",
            description: "Whether this is a digital-only release",
          },
          {
            type: "string",
            name: "format",
            label: "Format",
            description: "Format of the zine (e.g., 'A5', 'Letter', 'Digital')",
          },
        ],
        ui: {
          router: ({ document }) => `/zines/${document._sys.filename}`,
        },
      },
      {
        name: "label",
        label: "Music Labels",
        path: "content/labels",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Label Name",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "logo",
            label: "Label Logo",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            description: "Brief description of the label",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "website",
            label: "Website",
            description: "Official website URL",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            description: "City, state, or country where the label is based",
          },
          {
            type: "datetime",
            name: "founded",
            label: "Founded Date",
            description: "When the label was established",
          },
          {
            type: "string",
            name: "genre",
            label: "Primary Genre",
            description: "Main genre focus of the label",
          },
          {
            type: "string",
            name: "genres",
            label: "Genres",
            description: "All genres the label works with (comma-separated)",
          },
          {
            type: "string",
            name: "contactEmail",
            label: "Contact Email",
            description: "Contact email for the label",
          },
          {
            type: "object",
            name: "socialMedia",
            label: "Social Media",
            list: true,
            fields: [
              {
                type: "string",
                name: "platform",
                label: "Platform",
                options: [
                  "facebook",
                  "instagram",
                  "twitter",
                  "tiktok",
                  "youtube",
                  "bandcamp",
                  "soundcloud",
                ],
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL",
                required: true,
              },
            ],
          },
          {
            type: "string",
            name: "submissionPolicy",
            label: "Submission Policy",
            description: "Information about demo submissions",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "boolean",
            name: "acceptingSubmissions",
            label: "Accepting Submissions",
            description: "Whether the label is currently accepting demos",
          },
          {
            type: "string",
            name: "notableArtists",
            label: "Notable Artists",
            description: "Famous or notable artists on the label",
            ui: {
              component: "textarea",
            },
          },
        ],
        ui: {
          router: ({ document }) => `/labels/${document._sys.filename}`,
        },
      },
      {
        name: "aboutJared",
        label: "About Jared",
        path: "content/about-jared",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "metadata",
            label: "Metadata",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Meta Title",
                description: "Title for search engines and social sharing",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Meta Description",
                description:
                  "Description for search engines and social sharing",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "keywords",
                label: "Meta Keywords",
                description: "Comma-separated keywords for SEO",
              },
              {
                type: "image",
                name: "ogImage",
                label: "Open Graph Image",
                description: "Image for social media sharing",
              },
              {
                type: "string",
                name: "ogTitle",
                label: "Open Graph Title",
                description:
                  "Title for social media sharing (optional, defaults to meta title)",
              },
              {
                type: "string",
                name: "ogDescription",
                label: "Open Graph Description",
                description:
                  "Description for social media sharing (optional, defaults to meta description)",
              },
              {
                type: "string",
                name: "twitterCard",
                label: "Twitter Card Type",
                description: "Type of Twitter card to display",
                options: ["summary", "summary_large_image", "app", "player"],
              },
            ],
          },
          {
            type: "image",
            name: "image",
            label: "Profile Image",
            required: true,
          },

          {
            type: "rich-text",
            name: "bio",
            label: "Biography",
            description: "Personal biography and story",
            required: true,
          },
          {
            type: "object",
            name: "socialMediaUrls",
            label: "Social Media URLs",
            list: true,
            fields: [
              {
                type: "string",
                name: "platform",
                label: "Platform",
                options: [
                  "facebook",
                  "instagram",
                  "twitter",
                  "tiktok",
                  "youtube",
                  "linktree",
                ],
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL",
                required: true,
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => `/about-jared`,
        },
      },
      {
        name: "homepage",
        label: "Homepage",
        path: "content/homepage",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "metadata",
            label: "Metadata",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Meta Title",
                description: "Title for search engines and social sharing",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Meta Description",
                description:
                  "Description for search engines and social sharing",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "keywords",
                label: "Meta Keywords",
                description: "Comma-separated keywords for SEO",
              },
              {
                type: "image",
                name: "ogImage",
                label: "Open Graph Image",
                description: "Image for social media sharing",
              },
              {
                type: "string",
                name: "ogTitle",
                label: "Open Graph Title",
                description:
                  "Title for social media sharing (optional, defaults to meta title)",
              },
              {
                type: "string",
                name: "ogDescription",
                label: "Open Graph Description",
                description:
                  "Description for social media sharing (optional, defaults to meta description)",
              },
              {
                type: "string",
                name: "twitterCard",
                label: "Twitter Card Type",
                description: "Type of Twitter card to display",
                options: ["summary", "summary_large_image", "app", "player"],
              },
            ],
          },
          {
            type: "object",
            name: "heroComponent",
            label: "Hero Component",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Hero Image",
                required: true,
              },
              {
                type: "string",
                name: "title",
                label: "Hero Title",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Hero Subtitle",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "ctaUrl",
                label: "Call to Action URL",
                description: "URL for the call to action button (optional)",
              },
              {
                type: "string",
                name: "ctaLabel",
                label: "Call to Action Label",
                description: "Text for the call to action button (optional)",
              },
            ],
          },
          {
            type: "object",
            name: "bookPromoSection",
            label: "Book Promotion Section",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Book Image",
                required: true,
              },
              {
                type: "string",
                name: "title",
                label: "Section Title",
                required: true,
              },
              {
                type: "rich-text",
                name: "description",
                label: "Description",
                description: "Description of the book or promotion",
                required: true,
              },
              {
                type: "string",
                name: "ctaUrl",
                label: "Call to Action URL",
                description: "URL for the call to action button (optional)",
              },
              {
                type: "string",
                name: "ctaText",
                label: "Call to Action Text",
                description: "Text for the call to action button (optional)",
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => `/`,
        },
      },
    ],
  },
});
