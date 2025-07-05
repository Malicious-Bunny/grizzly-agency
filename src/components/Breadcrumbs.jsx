import Link from 'next/link'
import Container from './Container'

const Breadcrumbs = ({ items }) => {
  if (!items || items.length <= 1) return null

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.href ? `https://grizzly-agency.com${item.href}` : undefined
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <Container className="mt-16">
        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="flex items-center space-x-2 text-neutral-500">
            {items.map((item, index) => (
              <li key={item.href || item.name} className="flex items-center">
                {index > 0 && (
                  <svg
                    className="w-4 h-4 mx-2 text-neutral-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {item.href && index < items.length - 1 ? (
                  <Link
                    href={item.href}
                    className="hover:text-neutral-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className={index === items.length - 1 ? "text-neutral-900 font-medium" : ""}>
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </>
  )
}

export default Breadcrumbs
