// src/sanity/schemaTypes/author.ts

import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  description: "Author profiles for blog posts and publications",
  fields: [
    defineField({
      name: "name",
      type: "string",
      description: "Author's full name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      description: "Unique URL-friendly identifier for the author",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      type: "image",
      description: "Profile photo of the author",
    }),
    defineField({
      name: "bio",
      type: "array",
      description: "Brief biography or introduction of the author",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
