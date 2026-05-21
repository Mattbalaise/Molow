import { signUp, signInWithGoogle } from '@/server/services/auth.service';
import Link from 'next/link';
import './page.css';
import stars from '@/assets/stars.png';
import Image from 'next/image';
import HeaderAuth from '@/components/headerAuth/page';

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ redirectTo?: string }>;
}) {
  async function signUpWrapper(formData: FormData) {
    'use server';
    return signUp(formData.get('email') as string, formData.get('password') as string);
  }

  async function signUpWithGoogleWrapper() {
    'use server';
    return signInWithGoogle();
  }

  return (
    <div className="signup-page">
      <HeaderAuth />
      <div className="signup-panel">
        <div className="signup-card">
          <div>
            <p className="signup-badge">Bienvenue</p>
            <h1 className="signup-title">Créer un compte</h1>
          </div>
          <form>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="form-input"
              />
              <input
                name="password"
                type="password"
                placeholder="Mot de passe"
                required
                className="form-input"
              />
            </div>
            <div className="form-actions">
              <button formAction={signUpWrapper} className="button-primary">
                S'inscrire
              </button>

              <div className="divider">
                <div className="divider-line" />
                <span className="divider-text">ou</span>
                <div className="divider-line" />
              </div>

              <button
                formNoValidate
                formAction={signUpWithGoogleWrapper}
                className="button-secondary"
              >
                S'inscrire avec Google
              </button>
            </div>
          </form>
          <p className="text-center">
            Déjà un compte ?{' '}
            <Link href="/auth/signin" className="text-link">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
      <div className="signup-side" />
    </div>
  );
}
