import type { Locale, Site } from "./types";

export const SITE: Site = {
  website: "https://jamieshawphilosophy-staging.netlify.app",
  author: "jamie shaw",
  desc: "jamie shaw's personal website and blog",
  title: "jamie shaw philosophy",
  ogImage: "jamie-shaw-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
} as const;

export const LOCALE: Locale = {
  lang: "en",
  langTag: ["en-EN"]
} as const;
