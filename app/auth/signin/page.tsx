import { signIn, signUp, signInWithGoogle } from '@/server/services/auth.service';
import Link from 'next/link';
import './page.css';
import HeaderAuth from '@/components/Auth/header/page';
import Button from '@/components/Auth/button/page';
import GoogleImg from '@/assets/google.png';
import Input from '@/components/Auth/input/page';

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
            <Input id="email" name="email" type="email" label="Email" required value="" placeholder="John.Doe@example.com" />
          </div>
          <div className="form-group">
            <Input id="password" name="password" type="password" label="Mot de passe"  required placeholder="●●●●●●●●●●●●●●●●" />
          </div>
          <input type="hidden" name="redirectTo" value={redirectTo} />
          <div className="form-actions">
            <Button
              label=""
              onClick={signInWithGoogleWrapper}
              title="Se connecter avec Google"
              image={GoogleImg}
            />
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
