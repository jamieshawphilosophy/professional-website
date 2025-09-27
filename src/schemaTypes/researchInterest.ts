import { reference, z } from "astro:content"

const researchInterestSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: reference("icon"),
  selectedPublications: z.array(z.string().min(1)).min(1)
})
