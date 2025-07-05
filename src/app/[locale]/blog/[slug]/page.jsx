import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/data/blogPosts";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import BlogContent from "@/components/BlogContent";
import RelatedPosts from "@/components/RelatedPosts";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Grizzly Agency Blog",
      description: "The requested blog post could not be found."
    };
  }

  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date().toISOString();

  return {
    title: `${post.title} | Grizzly Agency`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: "Grizzly Agency",
    category: post.category,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://grizzly-agency.com/blog/${post.slug}`,
      siteName: "Grizzly Agency",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      locale: "en_US",
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@grizzlyagency",
      images: [post.image],
    },
    alternates: {
      canonical: `https://grizzly-agency.com/blog/${post.slug}`,
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
}

const BlogPostPage = ({ params }) => {
  const post = getBlogPost(params.slug);
  const allPosts = getBlogPosts();

  if (!post) {
    notFound();
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": post.image,
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://grizzly-agency.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Grizzly Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://grizzly-agency.com/logo.png",
        "width": 300,
        "height": 60
      },
      "url": "https://grizzly-agency.com"
    },
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://grizzly-agency.com/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags.join(", "),
    "wordCount": post.excerpt.length * 20, // Estimate
    "timeRequired": post.readTime,
    "url": `https://grizzly-agency.com/blog/${post.slug}`,
    "isPartOf": {
      "@type": "Blog",
      "name": "Grizzly Agency Blog",
      "url": "https://grizzly-agency.com/blog"
    }
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://grizzly-agency.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://grizzly-agency.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://grizzly-agency.com/blog/${post.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-neutral-600 mb-6">
              <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-900">
                {post.category}
              </span>
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
              {post.title}
            </h1>

            <p className="mt-6 text-xl text-neutral-600">
              {post.excerpt}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center">
                <span className="text-sm font-medium text-neutral-700">
                  {post.author.split(' ').map(name => name[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-medium text-neutral-900">{post.author}</p>
                <p className="text-sm text-neutral-600">Senior Developer</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-16">
        <FadeIn>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 80vw, 100vw"
            />
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-16">
        <FadeIn>
          <div className="max-w-3xl">
            <BlogContent slug={post.slug} />

            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 hover:bg-neutral-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <RelatedPosts posts={allPosts} currentPostSlug={post.slug} />
    </>
  );
};

export default BlogPostPage;
