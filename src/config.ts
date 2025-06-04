import type { Site } from "./types";

export const SITE: Site = {
  website: "https://jamieshawphilosophy-staging.netlify.app",
  author: "jamie shaw",
  desc: "jamie shaw's personal website and blog",
  title: "jamie shaw philosophy",
  ogImage: "jamie-shaw-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
} as const;

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS = [
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Facebook`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: false,
  },
];
