import { defineType } from "sanity";
import { blockType, prefix } from "./block";

export const menuType = defineType({
  name: "menuBlocks",
  title: `${prefix}Menu`,
  type: "document",
  fields: [
    ...blockType,
    {
      title: "menu",
      name: "menu",
      type: "reference",
      to: [
        {
          type: "menu",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      description: "description",
      layout: "layout",
      media: "image",
    },
    prepare(selection) {
      const { title, subtitle, description, layout } = selection;
      const _title = title ? ` ${title}` : "";
      const _subTitle = _title === "" && subtitle ? ` ${subtitle}` : "";
      const _description =
        _title === "" && _subTitle === "" && description
          ? ` ${description.substr(0, 20)}...`
          : "";

      return {
        title: `Menu${layout ? ` ${layout}` : ""} | ${_title}${_subTitle}${_description}`,
      };
    },
  },
});
