// src/sanity/schemaTypes/section.ts

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
      name: "content",
      title: "Content",
      type: "array",
      of: [defineArrayMember({ type: "hero" })],
    }),
  ],
});
