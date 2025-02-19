// src/sanity/schemaTypes/page.ts

import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const pageType = defineType({
  title: "Page",
  name: "page",
  icon: DocumentIcon,
  type: "document",
  description: "Static pages for the website",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "The main title of the page",
      validation: (Rule) => Rule.required().max(96),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      description:
        "The URL-friendly name (e.g., 'about-me' for yourname.com/about-me)",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",
      description: "Add and arrange sections that make up the page content",
      of: [{ type: "section" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      sections: "sections",
    },
    prepare({ title, slug, sections = [] }) {
      return {
        title,
        subtitle: `/${slug} • ${sections.length} sections`,
      };
    },
  },
});
