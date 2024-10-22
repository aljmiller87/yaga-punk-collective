import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
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
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "content/pages",
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
            name: "bannerImage",
            label: "Banner Image",
            required: true,
          },
          {
            type: "rich-text",
            name: "bodyText",
            label: "Body Text (leave empty if not wanted on page)",
            isBody: true,
          },
          {
            label: "Page Blocks",
            name: "pageBlocks",
            type: "object",
            list: true,
            templates: [
              {
                label: "Image And Text",
                name: "ImageAndTet",
                fields: [
                  {
                    label: "Header",
                    name: "header",
                    type: "string",
                  },
                  {
                    label: "Description",
                    name: "description",
                    type: "rich-text",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "bandMembers",
        label: "Band Members",
        path: "content/bandMembers",
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
            label: "Image",
            required: true,
          },
          {
            label: "Social Media Urls",
            name: "socialMediaUrls",
            type: "object",
            list: true,
            fields: [
              {
                type: "string",
                name: "platform",
                label: "Social Media Platform",
                required: true,
                options: [
                  {
                    value: "instagram",
                    label: "Instagram",
                  },
                  {
                    value: "facebook",
                    label: "Facebook",
                  },
                  {
                    value: "twitter",
                    label: "Twitter",
                  },
                  {
                    value: "tiktok",
                    label: "TikTok",
                  },
                ],
              },
              {
                type: "string",
                name: "url",
                label: "Social Media Url",
                required: true,
              },
            ],
          },
          {
            type: "rich-text",
            name: "bodyText",
            label: "Body Text (leave empty if not wanted on page)",
            isBody: true,
          },
        ],
      },
      {
        name: "events",
        label: "Events",
        path: "content/events",
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            label: "Ticket URL",
            name: "ticketUrl",
            type: "string",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            ui: {
              dateFormat: "MMMM-DD-YYYY",
              timeFormat: "HH:mm",
              // parse: (value: any) => value && value.format("MMMM-DD-YYYY"),
            },
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
        ],
      },
      {
        label: "Video",
        name: "video",
        path: "content/videos",
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            label: "YouTube Video ID",
            name: "title",
            type: "string",
            required: true,
          },
        ],
      },
    ],
  },
});
