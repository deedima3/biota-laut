import * as z from 'zod'

const loginSchema = z.object({
    email: z.string().nonempty("Email harus diisi!"),
    password: z.string().nonempty("Password harus diisi!")
})

const registerSchema = z.object({
    username: z.string().nonempty("Username harus diisi!"),
    email: z.string().nonempty("Username harus diisi!").email("Masukkan email dengan format yang benar!"),
    password: z.string().nonempty("Password harus diisi!"),
    passwordConfirm: z.string().nonempty("Konfirmasi password harus diisi!"),
    name: z.string().nonempty("Nama harus diisi!"),
}).superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        path: ['confirmPassword'],
        code: "custom",
        message: "Password tidak cocok"
      });
    }
  });

export {
    loginSchema,
    registerSchema
}