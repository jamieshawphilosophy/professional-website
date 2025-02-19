// src/sanity/schemaTypes/header.ts

// Attribution: https://github.com/nuagedelait/sanity-pagebuilder/
import { defineField, defineType } from "sanity";

export const headerType = defineType({
  name: "header",
  title: "Header",
  icon: "",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      readOnly: true,
      initialValue: "Header",
    }),
    defineField({
      name: "menu",
      title: "Menu",
      type: "reference",
      to: [{ type: "menu" }],
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
