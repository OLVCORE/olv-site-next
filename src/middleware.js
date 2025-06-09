import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already includes a locale
  const pathnameHasLocale = /^\/(?:pt-BR|en-US)(?:\/|$)/.test(pathname);
  
  // If the pathname doesn't have a locale, redirect to pt-BR (default)
  if (!pathnameHasLocale) {
    const locale = 'pt-BR';
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
}; 