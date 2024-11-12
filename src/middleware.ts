import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';

export function middleware(req: NextRequest) {
  const userId = req.cookies.get('userId');

  const res = NextResponse.next();

  if (!userId) {
    req.cookies.set('userId', nanoid());
  }

  return res;
}

export const config = {
  matcher: [
    /* Match all requests patch except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image  (image optimization files)
     * - favicon.ico (favicon files)
     */

    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
