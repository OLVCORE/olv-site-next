import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Define locales and default locale
  const locales = ['pt-BR', 'en-US'];
  const defaultLocale = 'pt-BR';

  // Check if the pathname already includes a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname doesn't have locale, redirect to the default locale
  if (!pathnameHasLocale) {
    const locale = defaultLocale;
    
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
    );
  }
  
  return NextResponse.next();
} 