import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const RelatedPosts = ({ posts, currentPostSlug }) => {
  const relatedPosts = posts
    .filter(post => post.slug !== currentPostSlug)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Container className="mt-24">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-8">
          Related Articles
        </h2>
      </FadeIn>

      <FadeInStagger>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((post) => (
            <FadeIn key={post.id}>
              <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-neutral-50 transition-all duration-300 hover:bg-neutral-100">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-neutral-900 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-600 mb-3">
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-neutral-950 group-hover:text-neutral-700 transition-colors mb-2">
                    <Link href={`/blog/${post.slug}`} className="stretched-link">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-neutral-600 text-sm leading-relaxed flex-1">
                    {post.excerpt.length > 100
                      ? `${post.excerpt.substring(0, 100)}...`
                      : post.excerpt
                    }
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </Container>
  );
};

export default RelatedPosts;
