import Head from 'next/head'

const SEO = ({
  title,
  description,
  canonical,
  openGraph = {},
  structuredData = null,
  noindex = false,
  keywords = "",
}) => {
  const defaultTitle = "Grizzly Agency - Web Development & Digital Solutions Brandenburg Germany"
  const defaultDescription = "Brandenburg's premier web development agency specializing in custom websites, mobile apps, e-commerce solutions, and digital marketing. Transform your business with cutting-edge technology."

  const siteUrl = "https://grizzly-agency.com"
  const pageTitle = title ? `${title} | Grizzly Agency` : defaultTitle
  const pageDescription = description || defaultDescription
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl

  const defaultOG = {
    type: 'website',
    locale: 'en_US',
    url: canonicalUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: 'Grizzly Agency',
    image: `${siteUrl}/agency.PNG`,
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: title ? `${title} - Grizzly Agency` : 'Grizzly Agency - Premier Web Development Company Brandenburg Germany',
  }

  const mergedOG = { ...defaultOG, ...openGraph }

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={mergedOG.type} />
      <meta property="og:url" content={mergedOG.url} />
      <meta property="og:title" content={mergedOG.title} />
      <meta property="og:description" content={mergedOG.description} />
      <meta property="og:image" content={mergedOG.image} />
      <meta property="og:image:width" content={mergedOG.imageWidth} />
      <meta property="og:image:height" content={mergedOG.imageHeight} />
      <meta property="og:image:alt" content={mergedOG.imageAlt} />
      <meta property="og:site_name" content={mergedOG.siteName} />
      <meta property="og:locale" content={mergedOG.locale} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={mergedOG.image} />
      <meta property="twitter:image:alt" content={mergedOG.imageAlt} />
      <meta property="twitter:creator" content="@grizzlyagency" />
      <meta property="twitter:site" content="@grizzlyagency" />

      {/* Additional Meta Tags */}
      <meta name="author" content="Grizzly Agency Team" />
      <meta name="publisher" content="Grizzly Agency" />
      <meta name="copyright" content="Grizzly Agency" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}

export default SEO

// Helper function to generate organization structured data
export const getOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Grizzly Agency",
  "description": "Brandenburg's premier web development agency specializing in custom websites, mobile apps, e-commerce solutions, and digital marketing.",
  "url": "https://grizzly-agency.com",
  "logo": "https://grizzly-agency.com/agency.PNG",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49 15510 937316",
    "contactType": "customer service",
    "areaServed": "DE",
    "availableLanguage": ["en", "de"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Universitätsstr. 4",
    "addressLocality": "Brandenburg",
    "addressRegion": "CB",
    "postalCode": "03046",
    "addressCountry": "DE"
  },
  "sameAs": [
    "https://www.linkedin.com/company/grizzly-agency",
    "https://twitter.com/grizzlyagency",
    "https://github.com/grizzly-agency"
  ],
  "founder": {
    "@type": "Person",
    "name": "Grizzly Agency Team"
  },
  "foundingDate": "2019",
  "numberOfEmployees": "10-50",
  "servesCuisine": null,
  "priceRange": "$$$$",
  "areaServed": ["Brandenburg", "Germany", "Europe"],
  "knowsAbout": [
    "Web Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "Digital Marketing",
    "SEO Optimization",
    "Custom Software Development"
  ]
})

// Helper function to generate service structured data
export const getServiceStructuredData = (serviceName, description) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Grizzly Agency",
    "url": "https://grizzly-agency.com"
  },
  "areaServed": {
    "@type": "State",
    "name": "New York"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Web Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-commerce Solutions"
        }
      }
    ]
  }
})
