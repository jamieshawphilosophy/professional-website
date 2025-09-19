import {z} from "astro:content";

export const HeaderSchema = z.object({
  initials: z.string().min(2).max(10),
  navigation: reference("navigations"),
  featuredImage: z.string().url(),
  title: z.string().min(2).max(100),
  subtitle: z.string().min(2).max(100),
  cv: z.string().url().optional()
});
