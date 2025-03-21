// src/sanity/schemaTypes/blockContent.ts

// Attribution: https://www.sanity.io/guides/sanity-astro-blog#aa589ed2d5cf

import { defineArrayMember, defineType } from "sanity";
import { imageType } from "./image";
export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",

      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        /* Decorators usually describe a single property – e.g. a typographic preference or highlighting */
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        /* Annotations can be any object structure – e.g. a link or a footnote. */
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    /* You can add additional types here. Note that you can't use primitive types such as 'string' and 'number' in the same array as a block type. */
    defineArrayMember({
      ...imageType,
    }),
  ],
});
