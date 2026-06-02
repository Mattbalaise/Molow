// server/schemas/auth.schema.ts
import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.email("Votre email doit être de la forme example@domaine.com"),
  password: z.string().min(8, "Le mot de passe doit faire au moins 8 caractères"),
});