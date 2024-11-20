// src/schemaTypes/affiliation.ts

import { defineField, defineType } from "sanity";

export const affiliationType = defineType({
  name: "affiliation",
  title: "Professional Affiliation",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
