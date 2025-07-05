"use client";

import React, { useState } from "react";
import { useTranslations } from 'next-intl';
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";

const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
};

const NewsletterForm = () => {
  const t = useTranslations('footer.newsletter');
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: t('success') });
        setEmail("");
      } else {
        setSubmitStatus({ type: 'error', message: result.error || t('error') });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: t('error') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-sm">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
          {t('title')}
        </h2>
        <p className="mt-4 text-sm text-neutral-700">
          {t('description')}
        </p>

        {submitStatus && (
          <div className={`mt-4 p-3 rounded-lg text-sm ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <div className="relative mt-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('placeholder')}
            autoComplete="email"
            aria-label="Email address"
            required
            disabled={isSubmitting}
            className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 disabled:opacity-50"
          />
          <div className="absolute inset-y-1 right-1 flex justify-end">
            <button
              type="submit"
              aria-label="Submit"
              disabled={isSubmitting || !email}
              className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <ArrowIcon className="w-4" />
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FooterNavigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        {/* Large Grizzly Text - Clipped in middle on all screen sizes */}
        <div className="relative mt-16 w-full overflow-hidden h-24 sm:h-32 md:h-40 lg:h-48">
          {/* Responsive clipped text for all screen sizes */}
          <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 font-bold text-neutral-950/50 md:text-neutral-950/40 leading-none tracking-tighter select-none pointer-events-none whitespace-nowrap
            text-[7rem]
            sm:text-[9rem]
            md:text-[12rem]
            lg:text-[16rem]
            xl:text-[19rem]
            2xl:text-[23rem]">
            Grizzly
          </h2>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
