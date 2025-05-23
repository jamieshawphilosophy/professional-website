import { InlineIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { blockType, prefix } from "./block";

export const tabsType = defineType({
  name: "tabs",
  title: `${prefix}Tabs`,
  icon: InlineIcon,
  type: "document",
  fields: [
    ...blockType,
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
    prepare(selection) {
      return {
        title: `[TABS] ${selection.title}`,
      };
    },
  },
});
