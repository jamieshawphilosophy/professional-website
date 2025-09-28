import { reference, z } from "astro:content"

export const researchInterestSchema = z.object({
  id: z.number().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  icon: reference("icon"),
  selectedPublications: z.array(z.string().min(1)).min(1)
})
