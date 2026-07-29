// server/schemas/auth.schema.ts
import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.email("Format d'email invalide"),
  password: z.string().min(8, "Le mot de passe doit faire au moins 8 caractères")
    .regex(/[A-Z]/, "Le mot de passe doit contenir une majuscule")
});

export const signinSchema = z.object({
  email: z.email("Format d'email invalide"),
  password: z.string().min(1, "Le mot de passe ne peut pas être vide")
});