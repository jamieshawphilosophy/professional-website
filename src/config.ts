import type { Locale } from "@src/schemaTypes/locale.ts";
import type { Site } from "@src/schemaTypes/site.ts";
export const SITE: Site = {
  website: "https://jamieshawphilosophy-staging.netlify.app",
  author: "jamie shaw",
  description:
    "philosopher of science and instructor at the University of Toronto",
  title: "jamie shaw philosophy",
  ogImage: "jamie-shaw-og.jpg",
} as const;

export const LOCALE: Locale = {
  lang: "en",
  langTag: ["en-EN"],
} as const;
