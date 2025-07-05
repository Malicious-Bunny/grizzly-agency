import Link from "next/link";
import clsx from "clsx";
import {
  BsTwitter,
  BsGithub,
  BsYoutube,
} from "react-icons/bs";

export const SocialMediaProfiles = [
  { title: "GitHub", href: "https://github.com/grizzly-agency", icon: BsGithub },
  {
    title: "Twitter",
    href: "https://twitter.com/grizzlyagency",
    icon: BsTwitter,
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@grizzlyagency",
    icon: BsYoutube,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
