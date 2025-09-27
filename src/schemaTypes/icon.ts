export const iconSchema = z.object({
  label: z.string().min(1),
  name: z.string().min(1)
});
