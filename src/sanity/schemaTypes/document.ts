// src/sanity/schemaTypes/document.ts

// Attribution: https://github.com/nuagedelait/sanity-pagebuilder/

import type { SanityAsset } from "@sanity/image-url/lib/types/types";
import { parseString } from "@utils/is-string";
import { defineField } from "sanity";
import { imageType } from "./image";

export interface DocumentType {
  id: string;
  slug: {
    current?: string;
  };
  title: string;
  description: string;
  coverImage: SanityAsset;
  date: string;
}

export const documentType = [
  defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: (_doc, context) =>
        "title" in context.parent ? parseString(context.parent.title) : "",
      maxLength: 96,
    },
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "title",
    title: "Title",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "description",
    title: "Description",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "date",
    title: "Date",
    type: "datetime",
    initialValue: () => new Date().toISOString(),
    validation: (rule) => rule.required(),
  }),
  defineField({
    ...imageType,
    name: "coverImage",
    validation: (rule) => rule.required(),
  }),
];
