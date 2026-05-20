import { signIn, signUp, signInWithGoogle } from '@/server/services/auth.service';

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ redirectTo?: string }>;
}) {
  const { redirectTo = '/dashboard' } = await searchParams;

  async function signInWrapper(formData: FormData) {
    'use server';
    return signIn(
      formData.get('email') as string,
      formData.get('password') as string,
      formData.get('redirectTo') as string,
    );
  }
  async function signUpWrapper(formData: FormData) {
    'use server';
    return signUp(
      formData.get('email') as string,
      formData.get('password') as string,
      formData.get('redirectTo') as string,
    );
  }
  async function signInWithGoogleWrapper() {
    'use server';
    return signInWithGoogle();
  }
  return (
    <div>
      <h1>Connexion</h1>
      <form>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Mot de passe" required />
        {/* Champ caché pour la redirection */}
        <input type="hidden" name="redirectTo" value={redirectTo} />
        <button formAction={signInWrapper}>Se connecter</button>
        <button formAction={signUpWrapper}>S'inscrire</button>
        <button formNoValidate formAction={signInWithGoogleWrapper}>
          Se connecter avec Google
        </button>
      </form>
    </div>
  );
}
