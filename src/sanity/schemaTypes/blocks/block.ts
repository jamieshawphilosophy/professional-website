import { type Document, documentType } from "../document";

export interface BlockType extends Document {}

export const blockType = [
  ...documentType
    .filter((field) => field.name !== "date" && field.name !== "coverImage")
    .map((field) => {
      if (field.name === "image" || field.name === "description") {
        field.validation = undefined;
      }
      return field;
    }),
];

export const prefix = "Block | ";
