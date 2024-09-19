// src/sanity/schemaTypes/siteSettings.ts

import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  icon: CogIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "logo",
      title: "Site Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "favicon",
      title: "Site Favicon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
