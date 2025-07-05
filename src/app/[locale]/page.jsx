import { getTranslations } from 'next-intl/server';
import ClientCarousel from "@/components/ClientCarousel";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { getOrganizationStructuredData } from "@/components/SEO";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export const metadata = {
  title: "Brandenburg Web Development Agency | Custom Websites & Mobile Apps",
  description: "Award-winning web development agency in Brandenburg, Germany. We build custom websites, mobile apps, and e-commerce solutions that drive real business growth. Free consultation available.",
  keywords: "web development Brandenburg Germany, mobile app development, custom websites, e-commerce development, React developers Brandenburg, Next.js development, digital marketing Brandenburg",
  openGraph: {
    title: "Brandenburg Web Development Agency | Custom Websites & Mobile Apps",
    description: "Award-winning web development agency in Brandenburg, Germany. We build custom websites, mobile apps, and e-commerce solutions that drive real business growth.",
    url: "https://grizzly-agency.com",
    images: [
      {
        url: "/agency.PNG",
        width: 1200,
        height: 630,
        alt: "Grizzly Agency - Brandenburg Web Development Company",
      },
    ],
  },
};

export default async function Home() {
  const t = await getTranslations('hero');
  const tTestimonials = await getTranslations('testimonials');
  const structuredData = getOrganizationStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="text-black">
        <Container className="mt-24 sm:mt-32">
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              {t('description')}
            </p>
          </FadeIn>
        </Container>
        <ClientCarousel />
        <Testimonials
          className="mt-24 sm:mt-32 lg:mt-40"
          client={{ name: "TechFlow Solutions", logo: logoPhobiaDark }}
        >
          {tTestimonials('quote')}
        </Testimonials>
        <Services />
        <ContactSection />
      </main>
    </>
  );
}
