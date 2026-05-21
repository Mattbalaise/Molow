import { signIn, signUp, signInWithGoogle } from '@/server/services/auth.service';
import Link from 'next/link';
import './page.css';
import HeaderAuth from '@/components/headerAuth/page';

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
      formData.get('password') as string
    );
  }
  async function signUpWrapper(formData: FormData) {
    'use server';
    return signUp(
      formData.get('email') as string,
      formData.get('password') as string
    );
  }
  async function signInWithGoogleWrapper() {
    'use server';
    return signInWithGoogle();
  }
  return (
  <div className="signin-page">
    <HeaderAuth />
    <main className="signin-container">
      <section className="signin-form">
        <h1>Connexion</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input id="password" name="password" type="password" placeholder="Mot de passe" required />
          </div>
          <input type="hidden" name="redirectTo" value={redirectTo} />

          <div className="form-actions">
            <button formAction={signInWrapper} className="button-primary">
              Se connecter
            </button>
            <button formNoValidate formAction={signInWithGoogleWrapper} className="button-secondary">
              Se connecter avec Google
            </button>
          </div>
        </form>

        <p>
          Pas de compte ? <Link href="/auth/signup">S'inscrire</Link>
        </p>
      </section>

      <aside className="signin-side" aria-hidden="true" />
    </main>
  </div>
  );
}
