import { createClient } from '@/server/supabase/server';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(
  request: NextRequest,
): Promise<{ response: NextResponse; user: any }> {
  // On crée une réponse de base
  let supabaseResponse = NextResponse.next({ request });
  // On instancie le client Supabase avec accès aux cookies
  const supabase = await createClient();
  // getUser() → revalide le JWT côté Supabase
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return { response: supabaseResponse, user };
}
