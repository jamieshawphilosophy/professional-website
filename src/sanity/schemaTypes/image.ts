// src/sanity/schemaTypes/image.ts

// Attribution: https://github.com/nuagedelait/sanity-pagebuilder/
import { defineField, defineType } from "sanity";

export const imageType = defineType({
  name: "imageWithAlt",
  title: "Image",
  type: "image",
  fields: [
    defineField({
      name: "alt",
      title: "Alternative Text for accessibility",
      type: "string",
      description:
        "Optional. If the caption above is descriptive enough, there's no need to fill this field. Else, consider adding alternative text to make content more accessible.",
    }),
  ],
  options: {
    hotspot: true,
  },
});
