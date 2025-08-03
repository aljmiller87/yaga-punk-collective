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
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
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
        name: "gallery",
        label: "Gallery",
        path: "content/gallery",
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
            name: "description",
            label: "Description",
            description: "Optional description of the gallery item",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            description:
              "Category for organizing gallery items (e.g., events, activism, general)",
            options: [
              "events",
              "activism",
              "general",
              "performances",
              "behind-the-scenes",
            ],
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Gallery Image",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            description: "Date when the image was taken or event occurred",
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            description: "Where the image was taken (venue, city, etc.)",
          },
          {
            type: "string",
            name: "photographer",
            label: "Photographer",
            description: "Credit for the photographer",
          },
          {
            type: "string",
            name: "altText",
            label: "Alt Text",
            description: "Accessibility description for the image",
            required: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
            description: "Mark this as a featured gallery item",
          },
        ],
        ui: {
          router: ({ document }) => `/gallery/${document._sys.filename}`,
        },
      },
      {
        name: "bandMember",
        label: "Band Members",
        path: "content/bandMembers",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "LTC Role",
            description:
              "Member's role in the band (e.g., Vocalist, Guitarist, Drummer, Bassist)",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Profile Image",
            required: true,
          },
          {
            type: "string",
            name: "pronouns",
            label: "Pronouns",
            description: "Member's pronouns (e.g., She/Her, He/Him, They/Them)",
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Biography",
            description: "Member's biography and story",
            isBody: true,
          },
          {
            type: "object",
            name: "socialMediaUrls",
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
          {
            type: "number",
            name: "order",
            label: "Display Order",
            description:
              "Order in which to display this member on the page (lower numbers appear first)",
            required: true,
          },
        ],
        ui: {
          router: ({ document }) => `/members/${document._sys.filename}`,
        },
      },
    ],
  },
});
