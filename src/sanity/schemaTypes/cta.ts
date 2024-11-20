// src/sanity/schemaTypes/cta.ts

import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const ctaType = defineType({
  name: "cta",
  title: "Call to Action",
  icon: LinkIcon,
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: true,
        }),
    }),
  ],
});
