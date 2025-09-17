import type { Site } from "./types";

export const SITE: Site = {
  website: "https://jamieshawphilosophy-staging.netlify.app",
  author: "jamie shaw",
  desc: "jamie shaw's personal website and blog",
  title: "jamie shaw philosophy",
  ogImage: "jamie-shaw-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
} as const;

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;
