//src/sanity/schemaTypes/footer.ts

import { defineField, defineType } from "sanity";

export const Footer = defineType({
  name: "footer",
  title: "Footer",
  icon: "",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      readOnly: true,
      initialValue: "Footer",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "menu",
      title: "Menu",
      type: "reference",
      to: [{ type: "menu" }],
    }),
  ],
});
