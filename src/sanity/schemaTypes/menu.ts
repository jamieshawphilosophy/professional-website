import { MenuIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { documentType } from "./document";

export const menuType = defineType({
  name: "menu",
  title: "Menu",
  icon: MenuIcon,
  type: "document",
  fields: [
    ...documentType.filter((field) => {
      return (
        field.name !== "date" &&
        field.name !== "description" &&
        field.name !== "coverImage" &&
        field.name !== "slug"
      );
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "menuitem",
        },
      ],
    }),
  ],
});
