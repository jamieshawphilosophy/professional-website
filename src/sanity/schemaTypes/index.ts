// src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import { affiliationType } from "./affiliation";
import { authorType } from "./author";
import { blockContentType } from "./blockContent";
import { defaultBlocks } from "./blocks";
import { categoryType } from "./category";
import { ctaType } from "./cta";
import { footerType } from "./footer";
import { headerType } from "./header";
import { heroType } from "./hero";
import { imageType } from "./image";
import { jobType } from "./job";
import { menuType } from "./menu";
import { menuItemType } from "./menuItem";
import { pageType } from "./page";
import { postType } from "./post";
import { projectType } from "./project";
import { publicationType } from "./publication";
import { researchInterestType } from "./research-interest";
import { sectionType } from "./section";
import { siteSettingsType } from "./site-settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    affiliationType,
    authorType,
    blockContentType,
    categoryType,
    ctaType,
    ...defaultBlocks,
    footerType,
    headerType,
    heroType,
    imageType,
    jobType,
    menuType,
    menuItemType,
    pageType,
    postType,
    projectType,
    publicationType,
    sectionType,
    researchInterestType,
    siteSettingsType,
  ],
};
