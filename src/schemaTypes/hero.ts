import {z} from "astro:content";

export const heroSchema = z.object({
  featuredImage: z.object({
    src: z.string().url().or(z.string().startsWith("./")),
    alt: z.string()
  }),
  title: z.string().min(2).max(100),
  subtitle: z.string().min(2).max(100),
  cv: z.object({
    src: z.string().url().or(z.string().startsWith("./")),
    label: z.string()
  })
});
