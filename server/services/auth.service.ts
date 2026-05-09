'use server'

// import { createClient } from "@supabase/supabase-js"
import { redirect } from 'next/navigation'
import {createClient} from '../supabase/server'

// Connexion
export async function signIn(email: string, password: string, redirectTo: string) : Promise<void>
{
  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw new Error(error.message)
  redirect(redirectTo)
}

// Inscription 
export async function signUp(email: string, password: string, redirectTo: string) : Promise<void>
{
  const supabase = await createClient()
  const { error } = await supabase.auth.signUp({ email, password })
  if (error) throw new Error(error.message)
  redirect(redirectTo)
}

// Déconnexion
export async function signOut(redirectTo: string) : Promise<void>
{
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  if (error) throw new Error(error.message)
  redirect(redirectTo)
}

export async function signInWithGoogle() : Promise<void>
{
  const supabase = await createClient()
  console.log("helloworld")
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm`,
    },
  })
  console.log(data, error)
  if (error) throw new Error(error.message)
  if (data.url) redirect(data.url)
}