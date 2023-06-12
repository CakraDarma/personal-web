import * as z from "zod"

export const userNameSchema = z.object({
  name: z
    .string()
    .min(3, "Nama minimal 3 karakter")
    .max(30, "Nama maksimal 30 karakter"),
})
