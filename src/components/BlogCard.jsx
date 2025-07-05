import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import FadeIn from "./FadeIn";

const BlogCard = ({ post, className }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <FadeIn>
      <article className={clsx(
        "group relative flex flex-col overflow-hidden rounded-3xl bg-neutral-50 transition-all duration-300 hover:bg-neutral-100",
        className
      )}>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover grayscale transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900 backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-4 text-sm text-neutral-600 mb-3">
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="font-display text-xl font-semibold text-neutral-950 group-hover:text-neutral-700 transition-colors mb-3">
            <Link href={`/blog/${post.slug}`} className="stretched-link">
              {post.title}
            </Link>
          </h3>

          <p className="text-neutral-600 text-base leading-relaxed mb-4 flex-1">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-neutral-200 flex items-center justify-center">
                <span className="text-xs font-medium text-neutral-700">
                  {post.author.split(' ').map(name => name[0]).join('')}
                </span>
              </div>
              <span className="text-sm font-medium text-neutral-700">
                {post.author}
              </span>
            </div>

            <div className="flex gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-neutral-500 bg-neutral-200 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
};

export default BlogCard;
