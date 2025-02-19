// src/sanity/structure/index.ts

import type { StructureResolver } from "sanity/structure";
import { content } from "./content.ts";
import { management } from "./management.ts";
import { settings } from "./site-settings.ts";

const customSchemaTypes: {
  content: string[];
  blocks: string[];
} = {
  content: [
    "page",
    "menu",
    "post",
    "affiliation",
    "job",
    "project",
    "publication",
    "researchInterest",
  ],
  blocks: [
    "header",
    "footer",
    "blockContent",
    "imageWithAlt",
    "grid",
    "layout",
    "menu",
    "tabs",
  ],
};
export type CustomSchemaTypes = typeof customSchemaTypes;

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website Admin")
    .items([
      settings(S),
      S.divider(),
      content(customSchemaTypes)(S),
      management(S),
    ]);
