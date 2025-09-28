import { z } from "astro:content";

export const linkSchema = z.object({
  id: z.number().min(1),
  label: z.string().min(1),
  href: z.string().url(),
});
