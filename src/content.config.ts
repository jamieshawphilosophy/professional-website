/* content.config.ts */
/* Astro utilities */
import { defineCollection } from "astro:content";
/* Astro loader */
import { glob } from "astro/loaders";
/* Schema */
import { headerSchema } from "./schemaTypes/header.ts";
import { heroSchema } from "./schemaTypes/hero.ts";
import { navigationSchema } from "./schemaTypes/navigation.ts";
import { researchInterestSchema } from "./schemaTypes/researchInterest.ts";
import { linkSchema } from "./schemaTypes/link.ts";
import { footerSchema } from "./schemaTypes/footer.ts";

// 3. Define your collection(s)
const headers = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/headers/" }),
  schema: headerSchema,
});

const footers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/footers/" }),
  schema: footerSchema,
});

const navigations = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/navigations/" }),
  schema: navigationSchema,
});

const heroes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/heroes/" }),
  schema: heroSchema,
});

const researchInterests = defineCollection({
  loader: glob({
    pattern: "**/*.yaml",
    base: "./src/content/research-interests/",
  }),
  schema: researchInterestSchema,
});

const icons = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/icons" }),
});

const links = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/links" }),
  schema: linkSchema,
});

// Export a single `collections` object to register collections
export const collections = {
  headers,
  footers,
  navigations,
  heroes,
  researchInterests,
  icons,
  links,
};
