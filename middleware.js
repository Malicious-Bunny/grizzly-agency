import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches - defaults to 'en'
  defaultLocale,

  // Always show the locale in the URL for clarity
  localePrefix: 'always',

  // Enable automatic locale detection based on browser preferences
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - /api routes
    // - /_next routes (Next.js internals)
    // - /_vercel routes (Vercel internals)
    // - files with an extension (e.g. favicon.ico)
    '/((?!api|_next|_vercel|.*\\.).*)'
  ]
};
