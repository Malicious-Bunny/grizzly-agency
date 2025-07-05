import PageIntro from "@/components/PageIntro";
import WorkShowcase from "@/components/WorkShowcase";
import { workProjects } from "@/data/work";
import React from "react";

export const metadata = {
  title: "Brandenburg Web Development Portfolio | Mobile Apps & E-commerce Sites",
  description: "See our award-winning websites, mobile apps, and e-commerce platforms. Brandenburg's top web development agency showcasing real projects with measurable results and happy clients.",
  keywords: "web development portfolio Brandenburg, mobile app portfolio, e-commerce development examples, Brandenburg website design, custom software projects, React development showcase",
  openGraph: {
    title: "Brandenburg Web Development Portfolio | Mobile Apps & E-commerce Sites",
    description: "See our award-winning websites, mobile apps, and e-commerce platforms. Brandenburg's top web development agency showcasing real projects with measurable results.",
    url: "https://grizzly-agency.com/work",
  },
};

const WorkPage = () => {
  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Grizzly Agency Portfolio",
    "description": "A showcase of web development, mobile app, and e-commerce projects by Grizzly Agency",
    "creator": {
      "@type": "Organization",
      "name": "Grizzly Agency"
    },
    "url": "https://grizzly-agency.com/work"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }}
      />
      <PageIntro
        eyebrow="Our work"
        title="Real projects. Real results. Real happy clients."
      >
        <p>
          We don't just build websites—we build businesses. Check out some recent projects where our code
          directly translated into revenue growth, user engagement, and competitive advantages for our clients.
          (Yes, these are real numbers from real companies.)
        </p>
      </PageIntro>

      <WorkShowcase projects={workProjects} className="mt-24 sm:mt-32 lg:mt-40" />
    </>
  );
};

export default WorkPage;
