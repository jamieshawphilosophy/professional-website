import { z } from "astro:content";
export const SiteSchema = z.object({
  website: z.string().url(),
  author: z.string().min(2).max(100),
  desc: z.string().max(160),
  title: z.string().min(2).max(100),
  ogImage: z.string().url(),
  lightAndDarkMode: z.boolean(),
  postPerPage: z.number().min(1).default(3),
});
