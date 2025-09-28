import { z, reference } from "astro:content";

export const footerSchema = z.object({
  title: z.string().min(1),
  links: z.array(reference("links")),
  email: z.string().email(),
});
