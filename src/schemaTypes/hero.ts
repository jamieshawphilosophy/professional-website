import {z} from "astro:content";

export const HeroSchema = z.object({
  featuredImage: z.string().url(),
  title: z.string().min(2).max(100),
  subtitle: z.string().min(2).max(100),
  cv: z.string().url().optional()
});
