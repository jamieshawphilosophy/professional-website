// src/utils/coerce-boolean.ts

import { z } from "astro:content";
export const coerceBoolean = (value: unknown): boolean => {
  if (typeof value === "boolean") return value;
  if (typeof value !== "string")
    throw new Error("coerceBoolean expected a string or a boolean");
  return z
    .string()
    .toLowerCase()
    .transform((x) => x === "true")
    .pipe(z.boolean())
    .parse(value);
};
