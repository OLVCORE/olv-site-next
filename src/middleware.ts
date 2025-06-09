import { NextRequest, NextResponse } from 'next/server';
import { i18n } from './i18n';

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname already has a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Get locale from cookie or accept-language header
  let locale = i18n.defaultLocale;
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage.split(',')[0].split(';')[0].trim();
    if (i18n.locales.includes(preferredLocale as any)) {
      locale = preferredLocale;
    }
  }

  // Redirect to the locale version of the URL
  return NextResponse.redirect(
    new URL(`/${locale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`, request.url)
  );
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)'],
}; 