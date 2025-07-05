import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Contact Brandenburg Web Development Agency | Free Consultation",
  description: "Ready to build something amazing? Contact Grizzly Agency for a free consultation on your web development, mobile app, or e-commerce project. Brandenburg's top development team.",
  keywords: "contact web developer Brandenburg, free web development consultation, hire Brandenburg developers, mobile app development contact, custom software quote Brandenburg",
  openGraph: {
    title: "Contact Brandenburg Web Development Agency | Free Consultation",
    description: "Ready to build something amazing? Contact Grizzly Agency for a free consultation on your web development, mobile app, or e-commerce project.",
    url: "https://grizzly-agency.com/contact",
  },
};

const ContactPage = () => {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Grizzly Agency",
    "description": "Get in touch with Brandenburg's premier web development agency",
    "url": "https://grizzly-agency.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Grizzly Agency",
      "telephone": "+1-585-XXX-XXXX",
      "email": "hello@grizzly-agency.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street",
        "addressLocality": "Brandenburg",
        "addressRegion": "NY",
        "postalCode": "14604",
        "addressCountry": "US"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }}
      />
      <PageIntro eyebrow="Contact us" title="Ready to build something incredible?">
        <p>
          Whether you need a lightning-fast website, a mobile app that users love, or want to modernize
          your existing platform—let's talk. We offer free consultations because great projects start with great conversations.
        </p>
        <div className="mt-8 space-y-4 text-base">
          <p>
            <strong>Quick response guarantee:</strong> We'll get back to you within 24 hours (usually much faster).
          </p>
          <p>
            <strong>Free consultation:</strong> 30-minute strategy session to discuss your project and goals.
          </p>
          <p>
            <strong>No sales pressure:</strong> We're here to solve problems, not push services you don't need.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
