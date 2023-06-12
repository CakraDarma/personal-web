import * as z from "zod"

export const userAuthSchema = z.object({
  email: z.string().nonempty("Email belum diisi").email("Email tidak valid"),
  password: z
    .string()
    .min(6, "Password minimal 6 karakter")
    .nonempty("Password belum diisi"),
  name: z
    .string()
    .min(3, "Nama minimal 3 karakter")
    .nonempty("Nama belum diisi"),
  address: z
    .string()
    .min(3, "Alamat minimal 3 karakter")
    .nonempty("Alamat belum diisi"),
  contactNumber: z
    .string()
    .min(9, { message: "Nomor tidak valid" })
    .max(15, { message: "Nomor tidak valid" })
    .nonempty("Nomor tidak valid"),
})
