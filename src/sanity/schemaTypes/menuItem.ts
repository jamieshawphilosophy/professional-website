import { ChevronRightIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const menuItemType = defineType({
  name: "menuitem",
  title: "Menu Item",
  icon: ChevronRightIcon,
  type: "document",
  description: "Navigation menu items for header and footer",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Display text for the menu item",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
      description: "URL or path that this menu item links to",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "target",
      title: "Target",
      type: "string",
      description: "How the link should open (same window or new tab)",
      options: {
        list: [
          { title: "self", value: "_self" },
          { title: "blank", value: "_blank" },
          { title: "parent", value: "_parent" },
          { title: "top", value: "_top" },
        ],
      },
    }),
    defineField({
      name: "submenu",
      title: "Submenu",
      type: "menu",
      description: "Optional dropdown menu items",
    }),
  ],
});
