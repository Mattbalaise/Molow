'use client';
import { useActionState } from 'react';
import {signUpWithGoogleWrapper, signUpWrapper } from '@/server/actions/auth.actions';
import Link from 'next/link';
import google from '@/assets/google.png';
import '@/app/auth/page.css';
import HeaderAuth from '@/components/header/header';
import Divider from '@/components/divider/divider';
import Button from '@/components/button/button';
import Input from '@/components/input/input';

export default function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ redirectTo?: string }>;
}) 
{
  const [state, action] = useActionState(signUpWrapper, {});
  return (
    <div className="auth-page">
      <HeaderAuth />
      <div className="auth-panel">
        <div className="auth-card">
          <div>
            <p className="auth-badge">Bienvenue</p>
            <h1 className="auth-title">Créer un compte</h1>
          </div>
          <form action={action}>
            <div className="form-group">
                 {state.errors && (
                  <p className="text-sm" style={{color: 'black'}}>{state.errors?.email}{state.errors.password}</p>
                  )}
              <Input id="email" name="email" label="Email" type="text"  required defaultValue="" placeholder="Email" />
              <Input id="password" name="password" type="password" label="Mot de passe" required defaultValue="" placeholder="●●●●●●●●●●●●●●●●" />
            </div>
            <div className="form-actions">
              <Button title="S'inscrire" label="" style={{backgroundColor : '#0b5644', color: '#ffffff'}} />
              <Divider text="ou" />
              <Button 
              formAction={signUpWithGoogleWrapper}
              title="" label="" 
              style={{backgroundColor : '#0b5644', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem'}} 
              image={google} />
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
      <div className="auth-side" />
    </div>
  );
}
