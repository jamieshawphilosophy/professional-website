import { documentType } from "../document";

export const blockType = [
  ...documentType
    .filter((field) => field.name !== "date" && field.name !== "coverImage")
    .map((field) => {
      if (field.name === "description") {
        const { validation, ...rest } = field;
        return rest;
      }
      return field;
    }),
];

export const prefix = "Block | ";
