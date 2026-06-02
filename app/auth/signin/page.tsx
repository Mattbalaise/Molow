import { signIn, signUp, signInWithGoogle } from '@/server/services/auth.service';
import Link from 'next/link';
import '@/app/auth/page.css';
import HeaderAuth from '@/components/header/header';
import Button from '@/components/button/button';
import GoogleImg from '@/assets/google.png';
import Input from '@/components/input/input';
import Divider from '@/components/divider/divider';

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
  async function signInWithGoogleWrapper() {
    'use server';
    return signInWithGoogle();
  }
  return (
<div className="auth-page">
      <HeaderAuth />
      <div className="auth-panel">
        <div className="auth-card">
          <div>
            <p className="auth-badge">Bienvenue</p>
            <h1 className="auth-title">Se connecter</h1>
          </div>
          <form>
            <div className="form-group">
              <Input id="email" name="email" label="Email" required defaultValue="" placeholder="Email" />
              <Input id="password" name="password" type="password" label="Mot de passe" required defaultValue="" placeholder="●●●●●●●●●●●●●●●●" />
            </div>
            <div className="form-actions">
              <Button title="Se connecter" label="" style={{backgroundColor : '#0b5644', color: '#ffffff'}} />
              <Divider text="ou" />
              <Button 
              onClick={signInWithGoogleWrapper} 
              title="" label="" 
              style={{backgroundColor : '#0b5644', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem'}} 
              image={GoogleImg} />
            </div>
          </form>
          <p className="text-center">
            Déjà un compte ?{' '}
            <Link href="/auth/signup" className="text-link">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
      <div className="auth-side" />
    </div>
  );
}
