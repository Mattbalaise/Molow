'use client'
import { signInWrapper, signInWithGoogleWrapper } from '@/server/actions/auth/auth.actions'
import Link from 'next/link';
import '@/app/auth/page.css';
import HeaderAuth from '@/components/header/header';
import Button from '@/components/button/button';
import GoogleImg from '@/assets/google.png';
import Input from '@/components/input/input';
import Divider from '@/components/divider/divider';
import { useActionState } from 'react';

export default function SignInPage() {
  const [state, action] = useActionState(signInWrapper, {});
  return (
    <div className="auth-page">
      <HeaderAuth />
      <div className="auth-panel">
        <div className="auth-card">
          <div>
            <p className="auth-badge">Bienvenue</p>
            <h1 className="auth-title">Se connecter</h1>
          </div>
          <form action={action}>
            <div className="form-group">
              {state.errors?.general && (
                <p className="general-error">{state.errors?.general}</p>
              )}
              <Input id="email" name="email" label="Email" msgError={state.errors?.email} required defaultValue="" placeholder="Email" />
              <Input id="password" name="password" msgError={state.errors?.password} type="password" label="Mot de passe" required defaultValue="" placeholder="●●●●●●●●●●●●●●●●" />
            </div>
            <div className="form-actions">
              <Button title="Se connecter" label="" style={{ backgroundColor: '#0b5644', color: '#ffffff' }} />
              <Divider text="ou" />
              <Button
                onClick={signInWithGoogleWrapper}
                title="" label=""
                style={{ backgroundColor: '#0b5644', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem' }}
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
