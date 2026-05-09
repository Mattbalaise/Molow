import { signIn, signUp, signInWithGoogle } from '@/server/services/auth.service'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirectTo?: string }>
}) {
  const { redirectTo = '/dashboard' } = await searchParams;
  return (
    <div>
      <h1>Connexion</h1>

      <form>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Mot de passe" required />
        {/* Champ caché pour la redirection */}
        <input type="hidden" name="redirectTo" value={redirectTo} />

        {/* Deux boutons → deux actions différentes */}
        <button
          formAction={async (formData) => {
            'use server'
            await signIn(
              formData.get('email') as string,
              formData.get('password') as string,
              formData.get('redirectTo') as string
            )
          }}
        >
          Se connecter
        </button>

        <button
          formAction={async (formData) => {
            'use server'
            await signUp(
              formData.get('email') as string,
              formData.get('password') as string,
              formData.get('redirectTo') as string
            )
          }}
        >
          S'inscrire
        </button>
        <button
        formNoValidate
          formAction={async () => {
            'use server'
            await signInWithGoogle()
          }}
        >
          Se connecter avec Google
        </button>
      </form>
    </div>
  )
}