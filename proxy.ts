import { type NextRequest } from 'next/server';
import { updateSession } from '@/server/supabase/middleware';
import { NextResponse } from 'next/server';
const PUBLIC_PATHS = ['/auth', '/auth/signin', '/auth/signup', '/auth/confirm'];

export default async function proxy(request: NextRequest) {
  const response = NextResponse.next({ request });
  const { user, cookies } = await updateSession(request);
  cookies.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
  const pathname = request.nextUrl.pathname;
  const isPublic = PUBLIC_PATHS.some((path) => pathname.startsWith(path));
  //pour le moment à changer plus tard, on redirige vers la page de login si pas d'utilisateur
  if (!user && !isPublic) return NextResponse.redirect(new URL('/auth/signin', request.url));
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
