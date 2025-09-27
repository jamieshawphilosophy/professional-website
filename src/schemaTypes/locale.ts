import {z} from "astro:content";
export const localeSchema = z.object({
  lang: z.string().min(2).max(10).default("en"),
  langTag: z.array(z.string()).default(["en-EN"]),
});

export type Locale = z.infer<typeof localeSchema>
