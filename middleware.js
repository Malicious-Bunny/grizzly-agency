import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Always show the locale in the URL
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - /api routes
    // - /_next routes (Next.js internals)
    // - files with an extension (e.g. favicon.ico)
    '/((?!api|_next|_vercel|.*\\.).*)'
  ]
};
