import { reference, z } from "astro:content";

export const headerSchema = z.object({
	initials: z.string().min(2).max(10),
	navigation: reference("navigations"),
});
