'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales } from '@/i18n';
import { clsx } from 'clsx';

export default function LanguageSwitcher({ className }) {
  const t = useTranslations('language');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale) => {
    // Remove the current locale from the pathname
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className={clsx('flex items-center space-x-2', className)}>
      {locales.map((lang) => (
        <button
          key={lang}
          onClick={() => switchLocale(lang)}
          className={clsx(
            'px-3 py-1 text-sm font-medium transition-colors duration-200 rounded-md',
            locale === lang
              ? 'bg-neutral-100 text-neutral-900'
              : 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800'
          )}
          aria-label={t('switchTo', { language: lang.toUpperCase() })}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
