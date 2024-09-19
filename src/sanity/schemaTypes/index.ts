// src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import { authorType } from "./author";
import { blockContentType } from "./blockContent";
import { categoryType } from "./category";
import { heroType } from "./hero";
import { pageType } from "./page";
import { postType } from "./post";
import { sectionType } from "./section";
import { siteSettingsType } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    authorType,
    blockContentType,
    categoryType,
    postType,
    pageType,
    sectionType,
    heroType,
    siteSettingsType,
  ],
};
