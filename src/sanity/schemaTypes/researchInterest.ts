// src/sanity/schemaTypes/researchInterest.ts

import { BoltIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const researchInterestType = defineType({
  name: "researchInterest",
  title: "Research Interest",
  type: "document",
  icon: BoltIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
