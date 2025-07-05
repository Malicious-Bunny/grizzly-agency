export function constructMetadata({
  title = "Grizzly Agency - Premier Development & Digital Solutions",
  description = "Grizzly Agency delivers cutting-edge web development, mobile apps, e-commerce solutions, SEO optimization, and DevOps services. Transform your digital presence with Rochester's premier development agency.",
  image = "/agency.PNG",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@grizzlyagency",
    },
    icons,
    metadataBase: new URL("https://grizzly-agency.com/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
