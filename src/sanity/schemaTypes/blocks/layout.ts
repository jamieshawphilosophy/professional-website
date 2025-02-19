import { defineField, defineType } from "sanity";
import { blockType, prefix } from "./block";

export const layoutType = defineType({
  name: "layoutBlocks",
  title: `${prefix}Layout`,
  type: "document",
  fields: [
    ...blockType,
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      description: "Optional subtitle text for the layout block",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "imageWithAlt" }],
      description: "Add one or more images to the layout",
    }),
    defineField({
      name: "layout",
      title: "Layout Style",
      type: "string",
      options: {
        list: ["basic"],
        layout: "radio",
      },
      description: "Choose the layout style for this block",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [{ type: "cta" }],
      description: "Add call-to-action buttons",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      description: "description",
      layout: "layout",
      media: "images.0",
    },
    prepare(selection) {
      const { title, subtitle, description, layout } = selection;
      const _title = title ? ` ${title}` : "";
      const _subTitle = _title === "" && subtitle ? ` ${subtitle}` : "";
      const _description =
        _title === "" && _subTitle === "" && description
          ? ` ${description.slice(0, 20)}...`
          : "";

      return {
        title: `Layout${layout ? ` ${layout}` : ""} | ${_title}${_subTitle}${_description}`,
      };
    },
  },
});
