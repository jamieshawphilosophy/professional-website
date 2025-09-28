import { z } from "astro:content";
export const siteSchema = z.object({
  website: z.string().url(),
  author: z.string().min(2).max(100),
  description: z.string().max(160),
  title: z.string().min(2).max(100),
  ogImage: z.string().url(),
});

export type Site = z.infer<typeof siteSchema>;
