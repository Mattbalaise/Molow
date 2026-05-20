// app/auth/confirm/route.ts
import { createClient } from '@/server/supabase/server';
import { redirect } from 'next/navigation';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type');

  const supabase = await createClient();
  const redirectTo = (url = process.env.NEXT_PUBLIC_HOME_URL!) => redirect(url);
  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) redirectTo();
  }

  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({ type, token_hash } as any);
    if (!error) redirectTo();
  }
  redirectTo('/auth/signin');
}
