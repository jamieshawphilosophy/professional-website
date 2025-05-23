import { ThLargeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { blockType, prefix } from "./block";

export const gridType = defineType({
  name: "grid",
  title: `${prefix}Grid`,
  icon: ThLargeIcon,
  type: "document",
  fields: [
    ...blockType,
    defineField({
      name: "type",
      title: "Content type",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "filter",
      title: "Query filter",
      type: "string",
    }),
    defineField({
      name: "limit",
      title: "Query limit",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
    prepare(selection) {
      return {
        title: `[GRID] ${selection.title}`,
      };
    },
  },
});
