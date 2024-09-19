// src/sanity/schemaTypes/page.ts

import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const pageType = defineType({
  title: "Page",
  name: "page",
  icon: DocumentIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [{ type: "section" }],
    }),
  ],
});
