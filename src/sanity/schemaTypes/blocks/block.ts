import { type Document, documentType } from "../document";

export interface BlockType extends Document {}

const blockType = [
  ...documentType
    .filter((field) => field.name !== "date" && field.name !== "coverImage")
    .map((field) => {
      if (field.name === "image" || field.name === "description") {
        field.validation = undefined;
      }
      return field;
    }),
];
export default block;

export const prefix = "Block | ";
