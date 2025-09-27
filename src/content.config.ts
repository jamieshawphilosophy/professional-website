// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
import { headerSchema } from "./schemaTypes/header.ts";
import { heroSchema } from "./schemaTypes/hero.ts";
import { navigationSchema } from "./schemaTypes/navigation.ts"

const headers = defineCollection({
  loader: glob({pattern: "**/*.yaml", base: "./src/content/headers/" }),
  schema: HeaderSchema
});

const navigations = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/navigations/" }),
  schema: NavigationSchema
});

const heroes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/heroes/" }),
  schema: HeroSchema
});

// 4. Export a single `collections` object to register your collections
export const collections = { headers, navigations, heroes };
