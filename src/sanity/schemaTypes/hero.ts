// src/sanity/schemaTypes/hero.ts
import { defineArrayMember, defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  description: "A hero section for page headers.",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      description: "Small text displayed above the main title.",
      validation: (rule) => rule.max(40).warning("Keep the eyebrow short!"),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The main heading of the hero section.",
      validation: (rule) =>
        rule.required().max(80).warning("Keep the title short!"),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
      description: "A brief description or tagline.",
      validation: (rule) => rule.max(200).warning("Keep the subtitle concise!"),
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      description: "The featured image for the hero section.",
    }),
    defineField({
      name: "cta",
      title: "Call to Action",
      type: "array",
      description: "A button or link that directs users to take an action.",
      of: [defineArrayMember({ type: "reference", to: [{ type: "cta" }] })],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "backgroundImage",
    },
  },
});
