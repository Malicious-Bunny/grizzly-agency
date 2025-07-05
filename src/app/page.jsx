import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n';

// Root page - redirects to default locale
export default function RootPage() {
  // Always redirect to the default locale (English)
  redirect(`/${defaultLocale}`);
}
