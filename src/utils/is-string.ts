// src/utils/is-string.ts

import { z } from "astro:content";

export const safeParseString = (value: unknown) => {
  return z.string().safeParse(value);
};

export const isString = (value: unknown): boolean => {
  return safeParseString(value).success;
};

export const parseString = (value: unknown): string => {
  if (!isString(value))
    throw new Error(
      safeParseString(value).error?.message || "Expected a string",
    );
  return z.string().parse(value);
};
