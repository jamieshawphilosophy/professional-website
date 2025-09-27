// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
import { headerSchema } from "./schemaTypes/header.ts";
import { heroSchema } from "./schemaTypes/hero.ts";
import { navigationSchema } from "./schemaTypes/navigation.ts"
import {researchInterestSchema} from "./schemaTypes/researchInterest.ts"

const headers = defineCollection({
  loader: glob({pattern: "**/*.yaml", base: "./src/content/headers/" }),
  schema: headerSchema
});

const navigations = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/navigations/" }),
  schema: navigationSchema
});

const heroes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/heroes/" }),
  schema: heroSchema
});

const researchInterests = defineCollection({
  loader: glob({pattern: "**/*.yaml", base: "./src/content/research-interests/"}),
  schema: researchInterestSchema
})

const icons = defineCollection({
  loader: glob({pattern: "**/*.yaml", base: "./src/content/icons"})
})
// 4. Export a single `collections` object to register your collections
export const collections = { headers, navigations, heroes, researchInterests, icons };
