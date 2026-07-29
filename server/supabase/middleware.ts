import { createServerClient } from '@supabase/ssr';
import type { NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let pending: any[] = [];

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          pending = cookiesToSet;
        },
      },
    },
  );

  const { data: { user } } = await supabase.auth.getUser();

  return { user, cookies: pending };
}
