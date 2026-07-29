'use server';

// import { createClient } from "@supabase/supabase-js"
import { redirect } from 'next/navigation';
import { createClient } from '../supabase/server';
import { AuthState } from '@/server/types/auth.types'

// Connexion
export async function signIn(email: string, password: string): Promise<AuthState> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);
  redirect(process.env.NEXT_PUBLIC_HOME_URL!);
}

// Inscription
export async function signUp(email: string, password: string): Promise<AuthState> {
  console.log("email : ", email)
  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({ email, password });
  console.log(error)
  if (error) throw new Error(error.message);
  redirect(process.env.NEXT_PUBLIC_HOME_URL!);
}

// Déconnexion
export async function signOut(): Promise<void> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
  redirect(process.env.NEXT_PUBLIC_SITE_URL!);
}

export async function signInWithGoogle(): Promise<void> {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm`,
    },
  });
  console.log(data, error);
  if (error) throw new Error(error.message);
  if (data.url) redirect(data.url);
}
