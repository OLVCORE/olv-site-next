// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { i18n } from './i18n';

export function middleware(request: NextRequest) {
  // Multilanguage support is disabled - always use default locale
  const { pathname } = request.nextUrl;
  const defaultLocale = i18n.defaultLocale;
  
  // If we're not already on a path with the default locale, redirect to it
  if (!pathname.startsWith(`/${defaultLocale}`)) {
    // Skip redirects for assets, api routes, etc.
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/static') ||
      pathname.includes('.') ||
      pathname === '/favicon.ico'
    ) {
      return NextResponse.next();
    }
    
    // Redirect to the same path but with default locale
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
  
  return NextResponse.next();
}

// Aplica o middleware a todas as rotas, exceto static, api, etc.
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
