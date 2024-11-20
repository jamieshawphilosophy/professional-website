// src/sanity/schemaTypes/section.ts

import { parseString } from "@utils/is-string";
import { defineArrayMember, defineField, defineType } from "sanity";

export const sectionType = defineType({
  name: "section",
  title: "Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The URL path for this section, appears in the address bar",
      validation: (Rule) => Rule.required(),
      options: {
        source: (_doc, context) =>
          "title" in context.parent ? parseString(context.parent.title) : "",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "description",
      description: "A brief overview of the section",
      type: "text",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      description: "The content of the section, made up of blocks",
      of: [defineArrayMember({ type: "reference", to: [{ type: "block" }] })],
    }),
  ],
});
