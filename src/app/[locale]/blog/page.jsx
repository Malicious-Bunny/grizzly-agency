import PageIntro from "@/components/PageIntro";
import BlogGrid from "@/components/BlogGrid";
import BlogCategoriesClient from "@/components/BlogCategoriesClient";
import { getBlogPosts, getAllCategories } from "@/data/blogPosts";

export const metadata = {
  title: "Web Development Blog 2025 | Latest Tech Trends & Expert Tutorials",
  description: "Stay ahead with 2025's hottest web development trends. Expert tutorials on React, Next.js, AI integration, TypeScript, serverless, Web3, cybersecurity, and performance optimization from Brandenburg's leading development agency.",
  keywords: "web development blog 2025, React tutorials, Next.js 15 guide, AI web development, TypeScript patterns, serverless architecture, Web3 development, cybersecurity web developers, performance monitoring, sticky scroll animations, micro-frontends, PWAs 2025",
  authors: [{ name: "Grizzly Agency Team" }],
  creator: "Grizzly Agency",
  publisher: "Grizzly Agency",
  category: "Technology",
  openGraph: {
    title: "Web Development Blog 2025 | Latest Tech Trends & Expert Tutorials",
    description: "Stay ahead with 2025's hottest web development trends. Expert tutorials on React, Next.js, AI integration, TypeScript, serverless, Web3, and more.",
    url: "https://grizzly-agency.com/blog",
    siteName: "Grizzly Agency",
    images: [
      {
        url: "https://grizzly-agency.com/images/blog/blog-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Grizzly Agency Web Development Blog - 2025 Tech Trends",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Blog 2025 | Latest Tech Trends & Expert Tutorials",
    description: "Stay ahead with 2025's hottest web development trends. Expert tutorials from Brandenburg's leading development agency.",
    creator: "@grizzlyagency",
    images: ["https://grizzly-agency.com/images/blog/blog-cover.jpg"],
  },
  alternates: {
    canonical: "https://grizzly-agency.com/blog",
    types: {
      "application/rss+xml": [
        { url: "https://grizzly-agency.com/blog/rss.xml", title: "Grizzly Agency Blog RSS" }
      ]
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const BlogPage = () => {
  const allPosts = getBlogPosts();
  const categories = getAllCategories();

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Grizzly Agency Web Development Blog",
    "description": "Expert insights on web development, mobile apps, AI integration, and cutting-edge technology trends for 2025",
    "url": "https://grizzly-agency.com/blog",
    "inLanguage": "en-US",
    "isFamilyFriendly": true,
    "publisher": {
      "@type": "Organization",
      "name": "Grizzly Agency",
      "url": "https://grizzly-agency.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://grizzly-agency.com/logo.png",
        "width": 300,
        "height": 60
      },
      "sameAs": [
        "https://twitter.com/grizzlyagency",
        "https://linkedin.com/company/grizzly-agency",
        "https://github.com/grizzly-agency"
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://grizzly-agency.com/blog"
    },
    "blogPost": allPosts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://grizzly-agency.com/blog/${post.slug}`,
      "datePublished": new Date(post.date).toISOString(),
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "image": {
        "@type": "ImageObject",
        "url": post.image,
        "width": 800,
        "height": 400
      },
      "articleSection": post.category,
      "keywords": post.tags.join(", ")
    }))
  };

  // Website structured data
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Grizzly Agency",
    "alternateName": "Grizzly Web Development Agency",
    "url": "https://grizzly-agency.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://grizzly-agency.com/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Organization structured data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grizzly Agency",
    "alternateName": "Grizzly Web Development Agency",
    "url": "https://grizzly-agency.com",
    "logo": "https://grizzly-agency.com/logo.png",
    "description": "Premier web development agency specializing in React, Next.js, mobile apps, and cutting-edge web technologies",
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Grizzly Agency Founders"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brandenburg",
      "addressCountry": "DE"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Web Development",
      "Mobile App Development",
      "E-commerce Solutions",
      "SEO Optimization",
      "Digital Marketing"
    ],
    "sameAs": [
      "https://twitter.com/grizzlyagency",
      "https://linkedin.com/company/grizzly-agency",
      "https://github.com/grizzly-agency"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />

      <PageIntro eyebrow="Blog" title="2025 Web Development Trends & Expert Tutorials">
        <p>
          Stay ahead of the curve with cutting-edge insights on React, Next.js 15, AI integration,
          TypeScript patterns, serverless architecture, Web3 development, and cybersecurity.
          Real-world tutorials and case studies from our team of expert developers who build
          production applications daily.
        </p>
        <div className="mt-6 text-base text-neutral-600">
          <p>
            <strong>Latest Topics:</strong> Sticky scroll animations, AI-powered development,
            micro-frontends, PWAs, performance monitoring, blockchain integration, and advanced
            TypeScript patterns that will make you a better developer in 2025.
          </p>
        </div>
      </PageIntro>

      <BlogCategoriesClient
        categories={categories}
        allPosts={allPosts}
        className="mt-24 sm:mt-32 lg:mt-40"
      />
    </>
  );
};

export default BlogPage;
