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
      mediaRoot: "assets",
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
          {      label: "Page Blocks",
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
                  type: "string"
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
              ]
            },          ]
    }
        ],
      },
      {
        name: "endorsements",
        label: "Endorsement",
        path: "content/endorsements",
        fields: [
          {
            type: "number",
            name: "order",
            label: "Order Displayed",
          },
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
            type: "string",
            name: "url",
            label: "Url to organization's website",
            required: true,
          },
          {
            type: "rich-text",
            name: "bodyText",
            label: "Body Text (leave empty if not wanted on page)",
            isBody: true,
          },
        ]
      },
      {
        name: "newsItems",
        label: "News Item",
        path: "content/newsItems",
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
            name: "venue",
            label: "Venue",
            required: true,
          },
          {
            type: "string",
            name: "url",
            label: "Url",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "teaserText",
            label: "Teaser Text",
            isBody: true,
          },
        ],
      },
      {
        name: "issue",
        label: "Issue",
        path: "content/issues",
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
            name: "teaserText",
            label: "Teaser Text",
            isBody: true,
          },
          {
            type: "image",
            name: "icon",
            label: "Icon",
            required: true,
          },

          {
            type: "number",
            name: "order",
            label: "Order Displayed",
          },
        ],
      },
    ],
  },
});
