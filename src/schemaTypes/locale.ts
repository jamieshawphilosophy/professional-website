import {z} from "astro:content";
export const LocaleSchema = z.object({
  lang: z.string().min(2).max(10).default("en"),
  langTag: z.array(z.string()).default(["en-EN"]),
});
