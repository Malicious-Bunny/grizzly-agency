import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

export const metadata = {
  title: "About Our Brandenburg Web Development Team | Grizzly Agency Story",
  description: "Meet the Brandenburg web development team behind award-winning websites and mobile apps. Our story, values, and commitment to building technology that drives real business results.",
  keywords: "Brandenburg web development team, about grizzly agency, web developers Brandenburg Germany, custom software development company, mobile app developers Brandenburg",
  openGraph: {
    title: "About Our Brandenburg Web Development Team | Grizzly Agency Story",
    description: "Meet the Brandenburg web development team behind award-winning websites and mobile apps. Our story, values, and commitment to building technology that drives real business results.",
    url: "https://grizzly-agency.com/about",
  },
};

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="We're the team your competition wishes they had hired first">
        <p>
          Five years ago, we got tired of watching great businesses struggle with terrible websites.
          So we decided to do something about it.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Grizzly Agency started in a Brandenburg coffee shop when three developers realized something:
            most agencies either knew code but not business, or understood business but couldn't code their way out of a paper bag.
            We thought, "What if we could do both?"
          </p>
          <p>
            Today, we're a tight-knit team of developers, designers, and digital strategists who obsess over two things:
            clean code and measurable results. We've helped everyone from scrappy startups to Fortune 500 companies
            build digital products that don't just look good—they work ridiculously well.
          </p>
          <p>
            Based in Brandenburg, Germany (yes, we love our local Currywurst), we work with clients across Europe and beyond.
            We believe in radical transparency, iterative development, and never saying "that's impossible"
            until we've at least tried three different approaches.
          </p>
          <p>
            When we're not coding, you'll find us exploring the Brandenburg countryside, debating the best local breweries,
            or contributing to open-source projects. We're pretty normal people who just happen to be unreasonably
            good at turning ideas into profitable software.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="200+" label="Projects launched" />
          <StatListItem value="98.5%" label="Client retention rate" />
          <StatListItem value="$50M+" label="Revenue generated for clients" />
          <StatListItem value="3.2 sec" label="Average page load time" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
