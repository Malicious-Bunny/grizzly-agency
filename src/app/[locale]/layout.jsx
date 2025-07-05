import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import RootLayout from "@/components/RootLayout";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Grizzly Agency",
    default: "Grizzly Agency - Web Development & Digital Solutions Brandenburg Germany",
  },
  description: "Brandenburg's premier web development agency specializing in custom websites, mobile apps, e-commerce solutions, and digital marketing. Transform your business with cutting-edge technology that drives real results.",
  keywords: "web development Brandenburg Germany, mobile app development, e-commerce websites, digital marketing agency, custom software development, SEO services Brandenburg, website design, React development, Next.js developers",
  authors: [{ name: "Grizzly Agency Team" }],
  creator: "Grizzly Agency",
  publisher: "Grizzly Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://grizzly-agency.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://grizzly-agency.com",
    title: "Grizzly Agency - Web Development & Digital Solutions Brandenburg Germany",
    description: "Brandenburg's premier web development agency specializing in custom websites, mobile apps, e-commerce solutions, and digital marketing. Transform your business with cutting-edge technology.",
    siteName: "Grizzly Agency",
    images: [
      {
        url: "/agency.PNG",
        width: 1200,
        height: 630,
        alt: "Grizzly Agency - Premier Web Development Company Brandenburg Germany",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grizzly Agency - Web Development & Digital Solutions Brandenburg Germany",
    description: "Brandenburg's premier web development agency specializing in custom websites, mobile apps, e-commerce solutions, and digital marketing.",
    images: ["/agency.PNG"],
    creator: "@grizzlyagency",
    site: "@grizzlyagency",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <RootLayout>{children}</RootLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
