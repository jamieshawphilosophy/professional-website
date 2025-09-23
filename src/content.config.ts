// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
import { file, glob } from "astro/loaders";

// 3. Define your collection(s)
import { HeaderSchema } from "./schemaTypes/header.ts";
import {HeroSchema} from "./schemaTypes/hero.ts";
import {NavigationSchema} from "./schemaTypes/navigation.ts"

const header = defineCollection({
  schema: HeaderSchema,
  loader: file("./src/content/header.md"),
});

const navigations = defineCollection({
  schema: NavigationSchema,
  loader: glob({ pattern: "*.md", base: "./src/content/navigations" }),
});

const heroes = defineCollection({
  schema: HeroSchema,
  loader: glob({ pattern: "*.md", base: "./src/content/heroes" }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { header, navigations, heroes };
