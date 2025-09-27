import { z } from "astro:content";

export const navigationSchema = z.object({
  name: z.string().min(2).max(100),
  links: z.array(z.object({
    label: z.string().min(1).max(50),
    href: z.string().url().or(z.string().startsWith("#")),
    active: z.boolean().default(false),
    external: z.boolean().default(false)
  })).min(1)
});
