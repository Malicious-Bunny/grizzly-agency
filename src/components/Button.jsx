import Link from "next/link";
import clsx from "clsx";

const Button = ({ invert, href, className, children, ...props }) => {
  className = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",
    invert
      ? "bg-white text-neutral-950 hover:bg-neutral-200"
      : "bg-neutral-950 text-white hover:bg-neutral-800"
  );

  let inner = <span>{children}</span>;
  if (href) {
    // Check if it's an external URL
    const isExternal = href.startsWith('http://') || href.startsWith('https://');

    if (isExternal) {
      return (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {inner}
        </a>
      );
    }

    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {inner}
    </button>
  );
};

export default Button;
